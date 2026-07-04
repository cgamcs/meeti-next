import { notFound } from "next/navigation";
import { User } from "../../auth/types";
import { CommunityPolicy } from "../policies/CommunityPolicy";
import { MembershipPolicy } from "../policies/MembershipPolicy";
import { CommunityInput } from "../schemas/communitySchema";
import { communityRepository, ICommunityRepository } from "./CommunityRepository";
import { auth } from "@/src/lib/auth";
import { headers } from "next/headers";
import { deleteUTFiles } from "@/src/lib/uploadthing-server";
import { IMembershipRepository, membershipRepository } from "./MembershipRepository";

class CommunityService {
  constructor(
    private communityRepository: ICommunityRepository,
    private membershipRepository: IMembershipRepository
  ){}

  async createCommunity(data: CommunityInput, userId: string) {
    const community = await this.communityRepository.create({
      ...data,
      createdBy: userId
    })
    return community
  }

  async getUserCommunities(user: User) {
    const communities = await this.communityRepository.findByUser(user.id)
    const enriched = await Promise.all(communities.map(async (community) => {
      const isMember = true
      const isAdmin = CommunityPolicy.isAdmin(user, community)
      
      return {
        data: community,
        context: {isMember, isAdmin},
        permissions: {
          canEdit: CommunityPolicy.canEdit(user, community),
          canDelete: CommunityPolicy.canDelete(user, community),
          canJoin: MembershipPolicy.canJoin(user, community, isMember),
          canLeave: MembershipPolicy.canLeave(user, community, isMember),
          canViewMembers: CommunityPolicy.canViewMembers(user, community)
        }
      }
    }))

    return enriched
  }

  async getCommunity(communityId: string) {
    const community = await this.communityRepository.findById(communityId)
    if (!community) notFound()
    return community
  }

  async getCommunityDetails(communityId: string, user?: User) {
    const community = await this.getCommunity(communityId)

    if(!user) {
      return {
        data: community,
        context: null,
        permissions: null
      }
    }

    const isMember = await this.membershipRepository.isMember(community.id, user.id)
    const isAdmin = CommunityPolicy.isAdmin(user, community)

    return {
      data: community,
      context: {isMember, isAdmin},
      permissions: {
        canEdit: CommunityPolicy.canEdit(user, community),
        canDelete: CommunityPolicy.canDelete(user, community),
        canJoin: MembershipPolicy.canJoin(user, community, isMember),
        canLeave: MembershipPolicy.canLeave(user, community, isMember),
        canViewMembers: CommunityPolicy.canViewMembers(user, community)
      }
    }
  }

  async updateCommunity(data: CommunityInput, communityId: string, user: User) {
    const community = await this.getCommunity(communityId)
    if (!community) notFound()
    
    if (!CommunityPolicy.canEdit(user, community)) {
      throw new Error('No tienes permisos para actualizar esta comunidad')
    }

    await this.communityRepository.update(data, communityId)
  }

  async deleteCommunity(communityId: string, password: string, user: User) {
    const community = await this.getCommunity(communityId)

    if (!CommunityPolicy.canDelete(user, community)) {
      throw new Error('No tienes permisos para eliminar esta comunidad')
    }

    try {
      await auth.api.verifyPassword({
        body: { password },
        headers: await headers()
      })
    } catch (error: any) {
      if (error.body && error.body.code === 'INVALID_PASSWORD'){
        return {
          error: 'Contraseña incorrecta',
          success: ''
        }
      }
    }

    await this.communityRepository.delete(communityId)
    await deleteUTFiles(community.image)

    return {
      error: '',
      success: 'Comunidad eliminada'
    }
  }
}

export const communityService = new CommunityService(communityRepository, membershipRepository)
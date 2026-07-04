import { User } from "../../auth/types";
import { MembershipPolicy } from "../policies/MembershipPolicy";
import { communityRepository, ICommunityRepository } from "./CommunityRepository";
import { IMembershipRepository, membershipRepository } from "./MembershipRepository";

class MembershipService {
  constructor(
    private membershipRepository: IMembershipRepository,
    private communityRepository: ICommunityRepository
  ){}

  async toggleMembership(communityId: string, user: User) {
    // Revisar si la comunidad existe
    const community = await this.communityRepository.findById(communityId)
    if(!community) return

    const isMember = await this.membershipRepository.isMember(communityId, user.id)

    // Si puede unirse, unirse
    if(MembershipPolicy.canJoin(user, community, isMember)) {
      await this.membershipRepository.addMember(communityId, user.id)

      return {
        success: true,
        message: `Te has unido a la comunidad ${community.name}`,
        newPermissions: {
          canJoin: false,
          canLeave: true
        }
      }
    }

    // Si puede salir, salirse
    if(MembershipPolicy.canLeave(user, community, isMember)) {
      await this.membershipRepository.removeMember(communityId, user.id)

      return {
        success: true,
        message: `Has salido de la comunidad ${community.name}`,
        newPermissions: {
          canJoin: true,
          canLeave: false
        }
      }
    }
  }

  async getJoinedCommunities(user: User) {
    await membershipRepository.findJoinedCommunities(user.id)
  }
}

export const membershipService = new MembershipService(membershipRepository, communityRepository)
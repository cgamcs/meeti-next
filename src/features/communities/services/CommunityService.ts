import { User } from "../../auth/types";
import { CommunityPolicy } from "../policies/CommunityPolicy";
import { CommunityInput } from "../schemas/communitySchema";
import { communityRepository, ICommunityRepository } from "./CommunityRepository";

class CommunityService {
  constructor(
    private communityRepository: ICommunityRepository
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
        context: {isMember, isAdmin}
      }
    }))

    console.log(enriched)
  }
}

export const communityService = new CommunityService(communityRepository)
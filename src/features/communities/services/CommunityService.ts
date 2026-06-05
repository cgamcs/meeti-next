import { User } from "../../auth/types";
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
    console.log(communities)
  }
}

export const communityService = new CommunityService(communityRepository)
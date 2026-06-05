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
    console.log(user)
  }
}

export const communityService = new CommunityService(communityRepository)
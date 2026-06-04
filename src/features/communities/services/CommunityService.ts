import { CommunityInput } from "../schemas/communitySchema";
import { communityRepository, ICommunityRepository } from "./CommunityRepository";

class CommunityService {
  constructor(
    private communityRepository: ICommunityRepository
  ){}

  async createCommunity(data: CommunityInput, userId: string) {
    console.log(data)
    console.log(userId)
  }
}

export const communityService = new CommunityService(communityRepository)
import { User } from "../../auth/types";

class MembershipService {
  async toggleMembership (communityId: string, user:User) {
    console.log(communityId)
    console.log(user)
  }
}

export const membershipService = new MembershipService()
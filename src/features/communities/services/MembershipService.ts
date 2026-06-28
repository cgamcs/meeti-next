import { User } from "../../auth/types";

class MembershipService {
  async toggleMembership(communityId: string, user: User) {
    console.log('desde toggle membership')
  }
}

export const membershipService = new MembershipService()
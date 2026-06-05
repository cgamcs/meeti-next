import { User } from "../../auth/types";
import { SelectCommunity } from "../types/community.types";

export class CommunityPolicy {
  static isAdmin(user: User, community: SelectCommunity) {
    return user.id === community.createdBy
  }
}
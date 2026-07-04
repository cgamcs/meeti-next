import { community, communityMembers } from "@/src/db/schema/community"
import { User } from "../../auth/types"

export type InsertCommunity = typeof community.$inferInsert
export type SelectCommunity = typeof community.$inferSelect
export type SelectCommunityMembers = typeof communityMembers.$inferSelect

export type CommunityPermissions = {
  canEdit: boolean
  canDelete: boolean
  canJoin: boolean
  canLeave: boolean
  canViewMembers: boolean
}

export type CommunityContext = {
  isAdmin: boolean
  isMember: boolean
}

export type CommunityWithPermissions = {
  data: SelectCommunity
  context: CommunityContext
  permissions: CommunityPermissions
}

export type JoinedCommunity = SelectCommunityMembers & {
 community: SelectCommunity
 member: User
}
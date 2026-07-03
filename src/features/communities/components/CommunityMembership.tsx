"use client"

import { useState } from "react"
import { CommunityPermissions } from "../types/community.types"
import { toggleMembershipAction } from "../actions/membership-actions"

type Props = {
  permissions: CommunityPermissions
  communityId: string
}

export default function CommunityMembership({ permissions, communityId } : Props) {
  const [canJoin, setCanJoin] = useState(permissions.canJoin)
  const [canLeave, setCanLeave] = useState(permissions.canLeave)

  const handleClick = async () => {
    await toggleMembershipAction(communityId)
  }

  return (
    <>
      {canJoin && (
        <button
          className="font-bold text-lg w-full lg:w-auto px-5 py-2 text-white rounded-lg cursor-pointer bg-orange-600"
          onClick={handleClick}
        >Inscribirme</button>
      )}

      {canLeave && (
        <button
          className="font-bold text-lg w-full lg:w-auto px-5 py-2 text-white rounded-lg cursor-pointer bg-red-600"
          onClick={handleClick}
        >Abandonar</button>
      )}
    </>
  )
}

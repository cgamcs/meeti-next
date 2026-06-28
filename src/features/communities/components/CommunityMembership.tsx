"use client"

import { CommunityPermissions } from "../types/community.types"

type Props = {
  permissions: CommunityPermissions
}

export default function CommunityMembership({ permissions } : Props) {
  const { canJoin, canLeave } = permissions
  return (
    <>
      {canJoin && (
        <button
          className="font-bold text-lg w-full lg:w-auto px-5 py-2 text-white rounded-lg cursor-pointer bg-orange-600"
        >Inscribirme</button>
      )}

      {canLeave && (
        <button
          className="font-bold text-lg w-full lg:w-auto px-5 py-2 text-white rounded-lg cursor-pointer bg-red-600"
        >Abandonar</button>
      )}
    </>
  )
}

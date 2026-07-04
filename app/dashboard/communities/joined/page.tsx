import { Metadata } from "next"
import { generatePageTitle } from "@/src/shared/utils/metadata"
import Heading from "@/src/shared/components/typography/Heading"
import Link from "next/link"
import { requireAuth } from "@/src/lib/auth-server"
import { redirect } from "next/navigation"
import { membershipService } from "@/src/features/communities/services/MembershipService"

const title = 'Comunidades a las que te uniste'

export const metadata : Metadata = {
  title: generatePageTitle(title)
}

export default async function JoinedCommunitiesPage() {
  const { session } = await requireAuth()
  if(!session) redirect('/')

  await membershipService.getJoinedCommunities(session.user)

  return (
    <>
      <Heading>{title}</Heading>

      <Link
        href="/dashboard/communities" 
        className="mt-5 block lg:inline-block text-center bg-orange-500 hover:bg-orange-600 transition-colors text-xs lg:text-lg text-white py-2 px-8 rounded-lg font-bold"
      >Volver a mis Comunidades</Link>
    </>
  )
}

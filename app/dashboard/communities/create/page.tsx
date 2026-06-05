import { Metadata } from "next"
import { generatePageTitle } from "@/src/shared/utils/metadata"
import Heading from "@/src/shared/components/typography/Heading"
import Link from "next/link"
import CreateCommunity from "@/src/features/communities/Components/CreateCommunity"
import { requireAuth } from "@/src/lib/auth-server"
import { redirect } from "next/navigation"

const title = 'Crear comunidad'

export const metadata : Metadata = {
  title: generatePageTitle(title)
}

export default async function CreateCommunityPage() {
  const { session } = await requireAuth()
  if (!session) redirect('/')

  return (
    <>
      <Heading>{title}</Heading>

      <Link
        href="/dashboard/communities" 
        className="mt-5 block lg:inline-block text-center bg-orange-500 hover:bg-orange-600 transition-colors text-xs lg:text-lg text-white py-2 px-8 rounded-lg font-bold"
      >Volver a mis Comunidades</Link>

      <CreateCommunity />
    </>
  )
}

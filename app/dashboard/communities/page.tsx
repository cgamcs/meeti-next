import { Metadata } from "next"
import { generatePageTitle } from "@/src/shared/utils/metadata"
import Heading from "@/src/shared/components/typography/Heading"
import Link from "next/link"
import MyCommunities from "@/src/features/communities/components/MyCommunities"

const title = 'Administra tus comunidades'

export const metadata : Metadata = {
  title: generatePageTitle(title)
}

export default function CommunitiesPage() {
  return (
    <>
      <Heading>{title}</Heading>

      <div className="flex justify-between flex-col lg:flex-row">
        <Link 
          href="/dashboard/communities/create" 
          className="mt-5 block lg:inline-block text-center bg-orange-500 hover:bg-orange-600 transition-colors text-xs lg:text-lg text-white py-2 px-8 rounded-lg font-bold"
        >Crear Comunidad</Link>
        <Link 
          href="/dashboard/communities/joined" 
          className="mt-5 block lg:inline-block text-center bg-pink-500 hover:bg-pink-600 transition-colors text-xs lg:text-lg text-white py-2 px-8 rounded-lg font-bold"
        >Comunidades a las que te uniste</Link>
      </div>

      <MyCommunities />
    </>
  )
}

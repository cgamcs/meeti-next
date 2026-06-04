import { Metadata } from "next"
import { generatePageTitle } from "@/src/shared/utils/metadata"
import Heading from "@/src/shared/components/typography/Heading"


export const metadata : Metadata = {
  title: generatePageTitle("Administra tus comunidades")
}

export default function CommunitiesPage() {
  return (
    <>
      <Heading>Administra tus comunidades</Heading>
    </>
  )
}

import Heading from "@/components/typography/Heading"
import { generatePageTitle } from "@/utils/metadata"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: generatePageTitle("Iniciar Sesión"),
}

export default function LoginPage() {
  return (
    <>
      <Heading>Iniciar Sesión</Heading>
    </>
  )
}

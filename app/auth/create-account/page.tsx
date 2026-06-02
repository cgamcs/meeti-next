import { Metadata } from "next"
import { generatePageTitle } from "@/utils/metadata"
import Heading from "@/src/shared/components/typography/Heading"

export const metadata: Metadata = {
  title: generatePageTitle("Crear Cuenta"),

}

export default function RegisterPage() {
  return (
    <>
      <Heading>Crear Cuenta</Heading>
    </>
  )
}

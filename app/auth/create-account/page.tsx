import { Metadata } from "next"
import { generatePageTitle } from "@/utils/metadata"
import Heading from "@/components/typography/Heading"
import RegisterForm from "@/src/features/auth/components/RegisterForm"

export const metadata: Metadata = {
  title: generatePageTitle("Crear Cuenta"),

}

export default function RegisterPage() {
  return (
    <>
      <Heading>Crear Cuenta</Heading>

      <RegisterForm />
    </>
  )
}

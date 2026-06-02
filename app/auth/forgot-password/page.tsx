import { Metadata } from "next"
import Heading from "@/components/typography/Heading"
import { generatePageTitle } from "@/src/shared/utils/metadata"
import ForgotPasswordForm from "@/src/features/auth/components/ForgotPasswordForm"
import Link from "next/link"

export const metadata : Metadata = {
  title: generatePageTitle("Reestablecer Contraseña")
}

export default function ForgotPasswordPage() {
  return (
    <>
      <Heading>Recupera tu acceso a Meeti</Heading>

      <ForgotPasswordForm />

      <nav className="flex justify-between gap-5 mt-5">
        <Link href="/auth/login" className="font-bold text-sm">
          Iniciar Sesión
        </Link>

        <Link href="/auth/create-account" className="font-bold text-sm">
          Crear Cuenta
        </Link>
      </nav>
    </>
  )
}

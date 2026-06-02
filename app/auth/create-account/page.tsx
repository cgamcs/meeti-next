import { Metadata } from "next"
import { generatePageTitle } from "@/utils/metadata"
import Heading from "@/components/typography/Heading"
import RegisterForm from "@/src/features/auth/components/RegisterForm"
import Link from "next/link"

export const metadata: Metadata = {
  title: generatePageTitle("Crear Cuenta"),
}

export default function RegisterPage() {
  return (
    <>
      <Heading>Crear Cuenta</Heading>

      <RegisterForm />

      <nav className="flex justify-between gap-5 mt-5">
        <Link href="/auth/login" className="font-bold text-sm">
          Iniciar Sesión
        </Link>

        <Link href="/auth/forgot-password" className="font-bold text-sm">
          ¿Olvidaste tu contraseña?
        </Link>
      </nav>
    </>
  )
}

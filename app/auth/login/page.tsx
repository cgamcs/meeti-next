import Heading from "@/components/typography/Heading"
import LoginForm from "@/src/features/auth/components/LoginForm"
import { generatePageTitle } from "@/utils/metadata"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: generatePageTitle("Iniciar Sesión"),
}

export default function LoginPage() {
  return (
    <>
      <Heading>Iniciar Sesión</Heading>

      <LoginForm />

      <nav className="flex justify-between gap-5 mt-5">
        <Link
          href="/auth/create-account"
          className="font-bold text-sm"
        >
          Crear Cuenta
        </Link>

        <Link
          href="/auth/forgot-password"
          className="font-bold text-sm"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </nav>
    </>
  )
}

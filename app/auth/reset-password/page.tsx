import { Metadata } from 'next'
import Heading from '@/src/shared/components/typography/Heading'
import { generatePageTitle } from '@/src/shared/utils/metadata'
import Link from 'next/link'
import SetPasswordForm from '@/src/features/auth/components/SetPasswordForm'

export const metadata : Metadata = {
  title: generatePageTitle("Reestablecer Contraseña")
}

export default function ResetPasswordPage() {
  return (
    <>
      <Heading>Recupera tu acceso a Meeti</Heading>

      <SetPasswordForm />

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

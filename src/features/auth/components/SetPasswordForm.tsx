"use client"

import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SetPasswordInput, SetPasswordSchema } from "../schemas/authSchema"
import { redirect, useSearchParams } from "next/navigation"
import { setPasswordAction } from "../actions/auth-actions"
import toast from "react-hot-toast"

export default function SetPasswordForm() {
  const searchParamas = useSearchParams()
  const token = searchParamas.get('token')

  if (!token) redirect('/auth/forgot-password')

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SetPasswordSchema),
    mode: 'all'
  })

  const onSubmit = async (data: SetPasswordInput) => {
    const { error, success } = await setPasswordAction(data, token)

    error && toast.error(error)

    if (success) {
      toast.success(success)
      redirect('/auth/login')
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="newPassword">Nueva Contraseña</FormLabel>
        <FormInput
          type="password"
          id="newPassword"
          placeholder="Ingresa tu nueva contraseña"
          {...register('newPassword')}
        />
        {errors.newPassword && <FormError>{errors.newPassword.message}</FormError>}

        <FormLabel htmlFor="passwordConfirmation">Repetir Contraseña</FormLabel>
        <FormInput
          type="password"
          id="passwordConfirmation"
          placeholder="Repite tu nueva contraseña"
          {...register('passwordConfirmation')}
        />
        {errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError>}

        <FormSubmit value={"Reestablecer contraseña"} />
      </Form>
    </>
  )
}

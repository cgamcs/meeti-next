"use client"

import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SetPasswordSchema } from "../schemas/authSchema"

export default function SetPasswordForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SetPasswordSchema),
    mode: 'all'
  })

  return (
    <>
      <Form>
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

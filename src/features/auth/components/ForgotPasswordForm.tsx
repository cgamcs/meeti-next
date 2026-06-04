"use client"

import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/components/forms"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ForgotPasswordSchema } from "../schemas/authSchema"

export default function ForgotPasswordForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
    mode: 'all'
  })

  return (
    <Form>
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        type="email"
        id="email"
        {...register('email')}
      />
      {errors.email && <FormError>{errors.email.message}</FormError>}

      <FormSubmit value="Enviar instrucciones" />
    </Form>
  )
}

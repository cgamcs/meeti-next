"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormLabel, FormInput, FormSubmit, FormError } from "@/components/forms"
import { SignInInput, SignInSchema } from "../schemas/authSchema"
import { signInAction } from "../actions/auth-actions"

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SignInSchema),
    mode: 'onChange'
  })

  const onSubmit = async (data: SignInInput) => {
    await signInAction(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        type="email"
        id="email"
        placeholder="Ingresa tu E-mail"
        {...register('email')}
      />
      {errors.email && <FormError>{errors.email.message}</FormError>}

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password"
        placeholder="Ingresa tu Contraseña"
        {...register('password')}
      />
      {errors.password && <FormError>{errors.password.message}</FormError>}

      <FormSubmit value="Enviar" />
    </Form>
  )
}

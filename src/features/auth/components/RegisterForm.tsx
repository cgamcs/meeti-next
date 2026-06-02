"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormLabel, FormInput, FormSubmit, FormError } from "@/components/forms"
import { SignUpInput, SignUpSchema } from "../schemas/authSchema"
import { signUpAction } from "../actions/auth-actions"

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SignUpSchema),
    mode: 'onChange'
  })

  const onSubmit = async (data: SignUpInput) => {
    await signUpAction(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput
        type="text"
        id="name"
        placeholder="Ingresa tu Nombre"
        {...register('name')}
      />
      {errors.name && <FormError>{errors.name.message}</FormError>}

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
        placeholder="Contraseña - Min. 8 Caracteres"
        {...register('password')}
      />
      {errors.password && <FormError>{errors.password.message}</FormError>}

      <FormLabel htmlFor="password_confirmation">Repetir Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password_confirmation"
        placeholder="Repetir tu Contraseña"
        {...register('passwordConfirmation')}
      />
      {errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError>}

      <FormSubmit value="Registrarme" />
    </Form>
  )
}

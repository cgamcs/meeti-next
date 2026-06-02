"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormLabel, FormInput, FormSubmit } from "@/components/forms"
import { SignUpSchema } from "../schemas/authSchema"

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SignUpSchema)
  })

  const onSubmit = () => {
    console.log('onSubmit')
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput
        type="text"
        id="name"
        placeholder="Ingresa tu Nombre"
        {...register('email')}
      />

      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        type="email"
        id="email"
        placeholder="Ingresa tu E-mail"
        {...register('email')}
      />

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password"
        placeholder="Contraseña - Min. 8 Caracteres"
        {...register('password')}
      />

      <FormLabel htmlFor="password_confirmation">Repetir Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password_confirmation"
        placeholder="Repetir tu Contraseña"
        {...register('passwordConfirmation')}
      />

      <FormSubmit value="Registrarme" />
    </Form>
  )
}

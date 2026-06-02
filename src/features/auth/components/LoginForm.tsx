"use client"

import { Form, FormLabel, FormInput, FormSubmit } from "@/components/forms"

export default function LoginForm() {
  return (
    <Form>
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        type="email"
        name="email"
        id="email"
        placeholder="Ingresa tu E-mail"
      />

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        type="password"
        name="password"
        id="password"
        placeholder="Ingresa tu Contraseña"
      />

      <FormSubmit value="Enviar" />
    </Form>
  )
}

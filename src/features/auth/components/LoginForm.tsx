"use client"

import Form from "@/components/forms/Form"
import FormInput from "@/src/shared/components/forms/FormInput"
import FormLabel from "@/src/shared/components/forms/FormLabel"

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
    </Form>
  )
}

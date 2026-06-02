"use client"

import Form from "@/components/forms/Form"
import FormLabel from "@/src/shared/components/forms/FormLabel"

export default function LoginForm() {
  return (
    <Form>
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Ingresa tu E-mail"
        className="border border-slate-300 rounded-lg w-full p-2 shadow focus:outline-pink-600"
      />

      <FormLabel htmlFor="password">Contraseña</FormLabel>

    </Form>
  )
}

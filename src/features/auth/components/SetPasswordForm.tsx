"use client"

import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms"

export default function SetPasswordForm() {
  return (
    <>
      <Form>
        <FormLabel htmlFor="newPassword">Nueva Contraseña</FormLabel>
        <FormInput
          type="password"
          id="newPassword"
          placeholder="Ingresa tu nueva contraseña"
        />

        <FormLabel htmlFor="passwordConfirmation">Repetir Contraseña</FormLabel>
        <FormInput
          type="password"
          id="passwordConfirmation"
          placeholder="Repite tu nueva contraseña"
        />

        <FormSubmit value={"Reestablecer contraseña"} />
      </Form>
    </>
  )
}

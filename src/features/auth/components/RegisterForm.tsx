

import { Form, FormLabel, FormInput, FormSubmit } from "@/components/forms"

export default function RegisterForm() {
  return (
    <Form>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput
        type="text"
        name="name"
        id="name"
        placeholder="Ingresa tu Nombre"
      />

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
        placeholder="Contraseña - Min. 8 Caracteres"
      />

      <FormLabel htmlFor="password2">Repetir Contraseña</FormLabel>
      <FormInput
        type="password"
        name="password2"
        id="password2"
        placeholder="Repetir tu Contraseña"
      />

      <FormSubmit value="Registrarme" />
    </Form>
  )
}

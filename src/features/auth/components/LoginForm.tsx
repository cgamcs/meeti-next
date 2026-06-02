"use client"

import Form from "@/components/forms/Form"

export default function LoginForm() {
  return (
    <Form>
      <label htmlFor="email" className="text-xs font-medium">E-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Ingresa tu E-mail"
        className="border border-slate-300 rounded-xl w-full p-2 mt-2 focus:outline-pink-600"
      />
    </Form>
  )
}

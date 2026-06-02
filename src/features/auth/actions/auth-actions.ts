"use server"

import { SignUpInput, SignUpSchema } from "../schemas/authSchema"

export async function signUpAction(input: SignUpInput) {
  const data = SignUpSchema.safeParse(input)

  if (!data.success) {
    return {
      error: 'Hubo un error',
      suscces: ''
    }
  }
  
  console.log(data.success)
}
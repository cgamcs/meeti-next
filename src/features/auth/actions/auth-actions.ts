"use server"

import { SignUpInput } from "../schemas/authSchema"

export async function signUpAction(input: SignUpInput) {
  console.log(input)
}
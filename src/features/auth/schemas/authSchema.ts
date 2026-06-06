import z from "zod"

export const BaseAuthSchema = z.object({
  name: z.string().trim().min(1, {error: "El nombre es obligatorio"}),
  email: z.email({error: "El email es obligatorio"}),
  password: z.string().trim().min(8, {error: "La contraseña debe ser mínimo de 8 caracters"}),
  passwordConfirmation: z.string().trim().min(1, {error: "La contraseña de confirmación no debe de ir vacío"}),
  newPassword: z.string().trim().min(8, {error: "La contraseña debe ser mínimo de 8 caracters"}),
})

export const SignInSchema = BaseAuthSchema.pick({
  email: true
}).extend({
  password: z.string().trim().min(1, {error: "La contraseña no puede ir vacía"})
})

export const SignUpSchema = BaseAuthSchema.pick({
  name: true,
  email: true, 
  password: true,
  passwordConfirmation: true
}).refine((data) => data.password === data.passwordConfirmation, {
  error: "Las contraseñas son diferentes",
  path: ['passwordConfirmation']
})

export const ForgotPasswordSchema = BaseAuthSchema.pick({
  email: true
})

export const SetPasswordSchema = BaseAuthSchema.pick({
  newPassword: true,
  passwordConfirmation: true
}).refine((data) => data.newPassword === data.passwordConfirmation, {
  error: "Las contraseñas son diferentes",
  path: ['passwordConfirmation']
})

export const CheckPasswordSchema = z.object({
  password: z.string().trim().min(1, {error: 'La contraseña no puede ir vacía'})
})

export type SignUpInput = z.infer<typeof SignUpSchema>
export type SignInInput = z.infer<typeof SignInSchema>
export type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>
export type SetPasswordInput = z.infer<typeof SetPasswordSchema>
export type CheckPasswordInput = z.infer<typeof CheckPasswordSchema>
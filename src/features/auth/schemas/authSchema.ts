import z from "zod"

export const BaseAuthSchema = z.object({
  name: z.string().trim().min(1, {error: "El nombre es obligatorio"}),
  email: z.email({error: "El email es obligatorio"}),
  password: z.string().trim().min(8, {error: "La contraseña debe ser mínimo de 8 caracters"}),
  passwordConfirmation: z.string().trim().min(1, {error: "La contraseña de confirmación no debe de ir vacío"})
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

export type SignUpInput = z.infer<typeof SignUpSchema>
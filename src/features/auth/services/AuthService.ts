import { auth } from "@/src/lib/auth"
import { ForgotPasswordInput, SetPasswordInput, SignInInput, SignUpInput } from "../schemas/authSchema"
import { authRepository, IAuthRepository } from "./AuthRepository"
import { headers } from "next/headers"
import { APIError } from "better-auth"

class AuthService {
  constructor(
    private authRepository: IAuthRepository
  ){}

  async register(credentials: SignUpInput) {
    const { name, email, password } = credentials

    // Revisar si el usuario existe
    const user = await this.authRepository.userExists(email)
    if (user) {
      return {
        error: 'Este e-mail ya esta registrado',
        success: ''
      }
    }

    // Manejar el registro
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        callbackURL: '/dashboard'
      },
      headers: await headers()
    })

    return {
      error: '',
      success: 'Cuenta creada, revisa tu e-mail'
    }
  }

  async login(credentials: SignInInput) {
    const { email, password } = credentials

    // Revisar si el usuario existe
    const user = await this.authRepository.userExists(email)
    if (!user) {
      return {
        error: 'Este e-mail no esta registrado',
        success: ''
      }
    }

    // Verificar su contraseña y si confirmo su cuenta
    try {
      await auth.api.signInEmail({
        body: {
          email,
          password,
          callbackURL: '/dashboard'
        },
        headers: await headers()
      })

      return {
        error: '',
        success: 'Sesión iniciada'
      }
    } catch (error) {
      if (error instanceof APIError) {
        const messages : Record<number, string> = {
          401: 'Contraseña incorrecta',
          403: 'Cuenta no confirmada, revisa tu e-mail'
        }

        const errorMessage = messages[error.statusCode]
        
        if (errorMessage) {
          return {
            error: errorMessage,
            success: ''
          }
        }
      }
    }

    return {
      error: '',
      success: ''
    }
  }

  async requestPasswordReset(input: ForgotPasswordInput) {
    const { email } = input

    const user = await this.authRepository.userExists(email)
    if (!user) {
      return {
        error: 'El usuario no existe',
        success: ''
      }
    }

    await auth.api.requestPasswordReset({
      body: {
        email
      }
    })

    return {
      error: '',
      success: 'Hemos enviado un e-mail con instrucciones'
    }
  }

  async setNewPassword(input: SetPasswordInput, token: string) {
    const { newPassword } = input

    try {
      await auth.api.resetPassword({
        body: {
          newPassword,
          token
        }
      })
    } catch (error) {
      if (error instanceof APIError) {
        return {
          error: 'Token no válido o Expirado',
          success: ''
        }
      }
    }

    return {
      error: '',
      success: 'Contraseña actualizada'
    }
  }
}

export const authService = new AuthService(authRepository)
import { auth } from "@/src/lib/auth"
import { SignInInput, SignUpInput } from "../schemas/authSchema"
import { authRepository, IAuthRepository } from "./AuthRepository"

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
        password
      }
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
    return {
      error: '',
      success: ''
    }
  }
}

export const authService = new AuthService(authRepository)
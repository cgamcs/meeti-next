import { auth } from "@/src/lib/auth"
import { SignUpInput } from "../schemas/authSchema"
import { authRepository, IAuthRepository } from "./AuthRepository"

class AuthService {
  constructor(
    private authRepository: IAuthRepository
  ){}

  async register(credentials: SignUpInput) {
    const { name, email, password } = credentials

    // Revisar si el usuario existe
    await this.authRepository.userExists(email)

    // Validación de negocio

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
}

export const authService = new AuthService(authRepository)
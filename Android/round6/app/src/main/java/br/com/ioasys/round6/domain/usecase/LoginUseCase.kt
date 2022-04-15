package br.com.ioasys.round6.domain.usecase

import br.com.ioasys.round6.domain.exception.InvalidEmailException
import br.com.ioasys.round6.domain.exception.InvalidPasswordException
import br.com.ioasys.round6.domain.model.User
import br.com.ioasys.round6.domain.repositories.LoginRepository
import kotlinx.coroutines.flow.Flow

class LoginUseCase(
    private val loginRepository: LoginRepository,
) {

    operator fun invoke(params: Params): Flow<User> = when {
        params.email.isEmpty() -> throw InvalidEmailException()
        params.password.isEmpty() -> throw InvalidPasswordException()
        else -> loginRepository.login(
            email = params.email,
            password = params.password
        )
    }

    data class Params(
        val email: String,
        val password: String
    )
}
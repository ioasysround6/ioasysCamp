package br.com.ioasys.round6.domain.usecase

import br.com.ioasys.round6.domain.exception.*
import br.com.ioasys.round6.domain.model.User
import br.com.ioasys.round6.domain.repositories.RegisterRepository
import br.com.ioasys.round6.domain.utils.UseCase
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.Flow

class RegisterUseCase(
    private val registerRepository: RegisterRepository,
    scope: CoroutineScope
) : UseCase<RegisterUseCase.Params, User>(scope = scope) {

    override fun run(params: Params?): Flow<User> = when {
        params?.firstName?.isEmpty() == true -> throw InvalidNameException()
        params?.lastName?.isEmpty() == true -> throw InvalidLastNameException()
        params?.birthDate?.isEmpty() == true -> throw InvalidBirthException()
        params?.email?.isEmpty() == true -> throw InvalidEmailException()
        params?.password?.isEmpty() == true -> throw InvalidPasswordException()
        else -> registerRepository.register(
            firstName = params?.firstName ?: "",
            lastName = params?.lastName ?: "",
            birthDate = params?.birthDate ?: "",
            email = params?.email ?: "",
            password = params?.password ?: ""
        )
    }

    data class Params(
        val firstName: String,
        val lastName: String,
        val birthDate: String,
        val email: String,
        val password: String
    )
}
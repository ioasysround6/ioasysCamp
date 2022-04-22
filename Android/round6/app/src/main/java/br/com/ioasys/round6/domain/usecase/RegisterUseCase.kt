package br.com.ioasys.round6.domain.usecase

import br.com.ioasys.round6.domain.exception.*
import br.com.ioasys.round6.domain.model.NewUser
import br.com.ioasys.round6.domain.repositories.RegisterRepository
import br.com.ioasys.round6.domain.utils.UseCase
import br.com.ioasys.round6.domain.utils.extension.isNotBirthDate
import br.com.ioasys.round6.domain.utils.extension.isNotEmail
import br.com.ioasys.round6.domain.utils.extension.isNotPassword
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.Flow

class RegisterUseCase(
    private val registerRepository: RegisterRepository,
    scope: CoroutineScope
) : UseCase<RegisterUseCase.Params, NewUser>(scope = scope) {

    override fun run(params: Params?): Flow<NewUser> = when {
        params?.firstName?.isBlank() == true -> throw InvalidNameException()
        params?.lastName?.isBlank() == true -> throw InvalidLastNameException()

        params?.birthDate?.isBlank() == true -> throw EmptyBirthDateException()
        params?.birthDate?.isNotBirthDate() == true -> throw InvalidBirthDateException()

        params?.email?.isBlank() == true -> throw EmptyEmailException()
        params?.email?.isNotEmail() == true -> throw InvalidEmailFormatException()

        params?.password?.isBlank() == true -> throw EmptyPasswordException()
        params?.password?.isNotPassword() == true -> throw InvalidPasswordFormatException()
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
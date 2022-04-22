package br.com.ioasys.round6.domain.usecase

import br.com.ioasys.round6.domain.exception.MissingParamsException
import br.com.ioasys.round6.domain.model.User
import br.com.ioasys.round6.domain.repositories.LoginRepository
import br.com.ioasys.round6.domain.utils.UseCase
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.Flow

class LoginUseCase(
    private val loginRepository: LoginRepository,
    scope: CoroutineScope
) : UseCase<LoginUseCase.Params, User>(scope = scope) {

    override fun run(params: Params?): Flow<User> = when {
        params?.email?.isEmpty() == true -> throw MissingParamsException()
        params?.password?.isEmpty() == true -> throw MissingParamsException()
        else -> try {
            loginRepository.login(
                email = params?.email ?: "",
                password = params?.password ?: ""
            )
        } catch (e: Exception) {
            throw e
        }
    }

    data class Params(
        val email: String,
        val password: String
    )
}
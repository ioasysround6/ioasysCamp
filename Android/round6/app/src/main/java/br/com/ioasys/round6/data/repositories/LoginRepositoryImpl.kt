package br.com.ioasys.round6.data.repositories

import br.com.ioasys.round6.data_remote.mappers.toDomain
import br.com.ioasys.round6.data_remote.model.LoginRequest
import br.com.ioasys.round6.data_remote.service.AuthService
import br.com.ioasys.round6.domain.model.User
import br.com.ioasys.round6.domain.repositories.LoginRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

class LoginRepositoryImpl(
    private val authService: AuthService
) : LoginRepository {

    override fun login(email: String, password: String): Flow<User> = flow {
        val response = authService.singIn(LoginRequest(email, password))
        if (response.isSuccessful) {
            response.body()?.let { loginResponse ->
                emit(loginResponse.toDomain())
            }
        }
    }
}
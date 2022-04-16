package br.com.ioasys.round6.data_remote.data_source

import br.com.ioasys.round6.data.data_source.remote.LoginRemoteDataSource
import br.com.ioasys.round6.data_remote.mappers.toDomain
import br.com.ioasys.round6.data_remote.model.LoginRequest
import br.com.ioasys.round6.data_remote.service.AuthService
import br.com.ioasys.round6.domain.model.User
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

class LoginRemoteDataSourceImpl(
    private val authService: AuthService
) : LoginRemoteDataSource {

    override fun login(email: String, password: String): Flow<User> = flow {
        val response = authService.singIn(LoginRequest(email, password))
        val token = response.headers()["Authorization"]
        if (response.isSuccessful) {
            response.body()?.let { loginResponse ->
                emit(loginResponse.toDomain(token ?: ""))
            }
        }
    }
}
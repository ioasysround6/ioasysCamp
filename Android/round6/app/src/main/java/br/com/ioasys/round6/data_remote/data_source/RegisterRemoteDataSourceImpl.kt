package br.com.ioasys.round6.data_remote.data_source

import br.com.ioasys.round6.data_remote.mappers.toDomain
import br.com.ioasys.round6.data_remote.model.RegisterRequest
import br.com.ioasys.round6.data_remote.service.AuthService
import br.com.ioasys.round6.domain.model.NewUser
import br.com.ioasys.round6.domain.repositories.RegisterRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

class RegisterRemoteDataSourceImpl(
    private val authService: AuthService
) : RegisterRepository {

    override fun register(
        firstName: String,
        lastName: String,
        birthDate: String,
        email: String,
        password: String
    ): Flow<NewUser> = flow {
        val response =
            authService.register(RegisterRequest(firstName, lastName, birthDate, email, password))
        if (response.isSuccessful) {
            response.body()?.let { registerResponse ->
                emit(registerResponse.toDomain())
            }
        }
    }
}
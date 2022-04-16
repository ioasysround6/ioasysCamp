package br.com.ioasys.round6.data_remote.service

import br.com.ioasys.round6.data_remote.model.LoginRequest
import br.com.ioasys.round6.data_remote.model.RegisterRequest
import br.com.ioasys.round6.data_remote.model.RegisterResponse
import br.com.ioasys.round6.data_remote.model.UserResponse
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.POST

interface AuthService {

    @POST("auth/login")
    suspend fun singIn(
        @Body loginRequest: LoginRequest
    ): Response<UserResponse>

    @POST("users")
    suspend fun register(
        @Body registerRequest: RegisterRequest
    ): Response<RegisterResponse>
}
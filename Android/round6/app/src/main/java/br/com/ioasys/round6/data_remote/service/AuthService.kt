package br.com.ioasys.round6.data_remote.service

import br.com.ioasys.round6.data_remote.model.LoginRequest
import br.com.ioasys.round6.data_remote.model.LoginResponse
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.POST

interface AuthService {

    @POST("")
    suspend fun singIn(
        @Body loginRequest: LoginRequest
    ): Response<LoginResponse>
}
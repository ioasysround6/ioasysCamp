package br.com.ioasys.round6.data_remote.model

import com.google.gson.annotations.SerializedName

data class LoginResponse(
    @SerializedName("firstName")
    private val firstName: String,
    @SerializedName("lastName")
    private val lastName: String,
    @SerializedName("email")
    private val email: String,
    @SerializedName("birthDate")
    private val birthDate: String
)

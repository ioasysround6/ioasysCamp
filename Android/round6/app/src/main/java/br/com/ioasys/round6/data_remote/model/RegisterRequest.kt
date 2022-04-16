package br.com.ioasys.round6.data_remote.model

import com.google.gson.annotations.SerializedName

data class RegisterRequest(
    @SerializedName("firstName")
    val firstName: String,
    @SerializedName("lastName")
    val lastName: String,
    @SerializedName("birthDate")
    val birthDate: String,
    @SerializedName("email")
    val email: String,
    @SerializedName("password")
    val password: String
)
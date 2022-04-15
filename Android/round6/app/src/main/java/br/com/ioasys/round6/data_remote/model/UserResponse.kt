package br.com.ioasys.round6.data_remote.model

import com.google.gson.annotations.SerializedName

data class UserResponse(
    @SerializedName("token")
    val token: String,
    @SerializedName("user")
    val user: UserResponseData
)

data class UserResponseData(
    @SerializedName("id")
    val id: String,
    @SerializedName("firstName")
    val firstName: String,
    @SerializedName("lastName")
    val lastName: String,
    @SerializedName("email")
    val email: String,
    @SerializedName("birthDate")
    val birthDate: String,
    @SerializedName("photo")
    val photo: String,
    @SerializedName("role")
    val role: String,
    @SerializedName("createdAt")
    val createdAt: String,
    @SerializedName("updatedAt")
    val updatedAt: String,
    @SerializedName("deletedAt")
    val deletedAt: String
)

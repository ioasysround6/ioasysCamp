package br.com.ioasys.round6.domain.model

data class User(
    val token: String,
    val user: UserData
)

data class UserData(
    val id: String,
    val firstName: String,
    val lastName: String,
    val email: String,
    val birthDate: String,
    val photo: String,
    val role: String,
    val createdAt: String,
    val updatedAt: String
)
package br.com.ioasys.round6.domain.model

data class NewUser(
    val id: String,
    val firstName: String,
    val lastName: String,
    val birthDate: String,
    val email: String,
    val createdAt: String,
    val deletedAt: Any? = null,
    val photo: String? = null,
    val role: String,
    val updatedAt: String
)
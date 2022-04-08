package br.com.ioasys.round6.domain.model

data class User(
    private val firstName: String,
    private val lastName: String,
    private val email: String,
    private val password: String,
    private val birthDate: String,
)

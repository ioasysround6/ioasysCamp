package br.com.ioasys.round6.domain.repositories

import br.com.ioasys.round6.domain.model.NewUser
import kotlinx.coroutines.flow.Flow

interface RegisterRepository {

    fun register(
        firstName: String,
        lastName: String,
        birthDate: String,
        email: String,
        password: String
    ): Flow<NewUser>
}
package br.com.ioasys.round6.domain.repositories

import br.com.ioasys.round6.domain.model.User
import kotlinx.coroutines.flow.Flow

interface LoginRepository {
    fun login(email: String, password: String): Flow<User>
}
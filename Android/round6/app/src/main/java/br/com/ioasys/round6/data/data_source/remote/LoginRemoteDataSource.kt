package br.com.ioasys.round6.data.data_source.remote

import br.com.ioasys.round6.domain.model.User
import kotlinx.coroutines.flow.Flow

interface LoginRemoteDataSource {

    fun login(email: String, password: String): Flow<User>
}
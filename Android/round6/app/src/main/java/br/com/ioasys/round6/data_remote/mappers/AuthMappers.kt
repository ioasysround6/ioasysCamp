package br.com.ioasys.round6.data_remote.mappers

import br.com.ioasys.round6.data_remote.model.LoginResponse
import br.com.ioasys.round6.domain.model.User
import br.com.ioasys.round6.domain.model.UserData

fun LoginResponse.toDomain() = User(
    token = this.token,
    user = UserData(
        id = user.id,
        firstName = user.firstName,
        lastName = user.lastName,
        email = user.email,
        birthDate = user.birthDate,
        photo = user.photo,
        role = user.role,
        createdAt = user.createdAt,
        updatedAt = user.updatedAt
    )
)

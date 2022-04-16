package br.com.ioasys.round6.data_remote.mappers

import br.com.ioasys.round6.data_remote.model.RegisterResponse
import br.com.ioasys.round6.data_remote.model.UserResponse
import br.com.ioasys.round6.domain.model.NewUser
import br.com.ioasys.round6.domain.model.User
import br.com.ioasys.round6.domain.model.UserData

fun UserResponse.toDomain() = User(
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

fun RegisterResponse.toDomain() = NewUser(
    id = id,
    firstName = firstName,
    lastName = lastName,
    birthDate = birthDate,
    email = email,
    createdAt = createdAt,
    updatedAt = updatedAt,
    role = role,
    photo = photo
)

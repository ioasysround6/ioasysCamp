package br.com.ioasys.round6.data_remote.utils.exception

enum class ErrorMessage(val message: String) {
    INVALID_USER_OR_PASSWORD("Usuário ou senha inválidos"),
    GENERIC_ERROR("Ocorreu um erro. Por favor tente mais tarde")
}

class UserInvalidException(
    message: String? = ErrorMessage.INVALID_USER_OR_PASSWORD.message
) : Exception(message)

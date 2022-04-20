package br.com.ioasys.round6.data_remote.utils

import br.com.ioasys.round6.data_remote.utils.exception.ErrorMessage
import br.com.ioasys.round6.data_remote.utils.exception.INVALID_USER_OR_PASSWORD
import br.com.ioasys.round6.data_remote.utils.exception.UserInvalidException
import retrofit2.HttpException

class NetworkWrapper {

    suspend operator fun <T> invoke(call: suspend () -> T): T =
        try {
            call()
        } catch (httpException: HttpException) {
            throw handleException(httpException.code())
        }

    private fun handleException(code: Int): Exception =
        when (code) {
            INVALID_USER_OR_PASSWORD -> {
                UserInvalidException()
            }
            else -> {
                Exception(ErrorMessage.GENERIC_ERROR.message)
            }
        }
}
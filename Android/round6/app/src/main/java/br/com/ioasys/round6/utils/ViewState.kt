package br.com.ioasys.round6.utils

sealed class ViewState<out T> {

    object Loading: ViewState<Nothing>()

    data class Success<T>(
        val data: T
    ): ViewState<T>()

    data class Error(
        val throwable: Throwable
    ): ViewState<Nothing>()

    object Neutral: ViewState<Nothing>()
}
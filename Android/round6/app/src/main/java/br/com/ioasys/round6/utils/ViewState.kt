package br.com.ioasys.round6.utils

sealed class ViewState<out T> {

    data class Success<T>(
        val data: T
    ): ViewState<T>()

    data class Error(
        val throwable: Throwable
    ): ViewState<Nothing>()

    object Neutral: ViewState<Nothing>()
}
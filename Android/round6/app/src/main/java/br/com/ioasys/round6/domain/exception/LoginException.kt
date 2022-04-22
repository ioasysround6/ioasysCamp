package br.com.ioasys.round6.domain.exception

open class LoginException : Exception()

class MissingParamsException : LoginException()
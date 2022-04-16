package br.com.ioasys.round6.domain.exception

open class RegisterException : Exception()

class InvalidNameException: RegisterException()
class InvalidLastNameException: RegisterException()
class InvalidBirthException: RegisterException()
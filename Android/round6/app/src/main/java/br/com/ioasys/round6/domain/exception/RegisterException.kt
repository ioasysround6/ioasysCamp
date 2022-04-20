package br.com.ioasys.round6.domain.exception

open class RegisterException : Exception()

class InvalidEmailException : RegisterException()
class InvalidPasswordException : RegisterException()
class InvalidNameException : RegisterException()
class InvalidLastNameException : RegisterException()
class InvalidBirthException : RegisterException()
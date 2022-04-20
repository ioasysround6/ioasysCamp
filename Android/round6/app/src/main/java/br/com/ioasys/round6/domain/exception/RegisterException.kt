package br.com.ioasys.round6.domain.exception

open class RegisterException : Exception()

class InvalidNameException: RegisterException()
class InvalidLastNameException: RegisterException()

class EmptyBirthDateException: RegisterException()
class InvalidBirthDateException: RegisterException()

class EmptyEmailException: RegisterException()
class InvalidEmailFormatException: RegisterException()

class EmptyPasswordException: RegisterException()
class InvalidPasswordFormatException: RegisterException()
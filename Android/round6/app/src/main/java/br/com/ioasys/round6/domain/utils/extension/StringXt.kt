package br.com.ioasys.round6.domain.utils.extension

import br.com.ioasys.round6.domain.utils.RegexEnum

fun String.isEmail() = RegexEnum.EMAIL.match(this)
fun String.isNotEmail() = !isEmail()
fun String.isPassword() = RegexEnum.PASSWORD.match(this)
fun String.isNotPassword() = !isPassword()
fun String.isBirthDate() = RegexEnum.BIRTH_DATE.match(this)
fun String.isNotBirthDate() = !isBirthDate()
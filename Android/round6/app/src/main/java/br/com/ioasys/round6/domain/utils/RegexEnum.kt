package br.com.ioasys.round6.domain.utils

enum class RegexEnum(private val value: Regex) {
    EMAIL("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}\$".toRegex()),
    PASSWORD("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@\$ %^&*-]).{8,}\$".toRegex()),
    BIRTH_DATE("^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])\$".toRegex());

    fun match(string: String) = this.value.containsMatchIn(string)
}
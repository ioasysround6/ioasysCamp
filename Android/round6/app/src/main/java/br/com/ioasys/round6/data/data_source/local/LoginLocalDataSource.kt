package br.com.ioasys.round6.data.data_source.local

interface LoginLocalDataSource {

    fun saveToken(token: String)
}
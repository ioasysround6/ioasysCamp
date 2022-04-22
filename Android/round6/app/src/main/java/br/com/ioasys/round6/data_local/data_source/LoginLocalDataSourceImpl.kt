package br.com.ioasys.round6.data_local.data_source

import br.com.ioasys.round6.data.data_source.local.LoginLocalDataSource
import br.com.ioasys.round6.data_local.utils.LocalConstants.TOKEN_KEY
import br.com.ioasys.round6.data_local.utils.SharedPreferencesHelper

class LoginLocalDataSourceImpl(
    private val sharedPreferencesHelper: SharedPreferencesHelper
) : LoginLocalDataSource {

    override fun saveToken(token: String) = sharedPreferencesHelper.saveString(
        key = TOKEN_KEY,
        value = token
    )
}
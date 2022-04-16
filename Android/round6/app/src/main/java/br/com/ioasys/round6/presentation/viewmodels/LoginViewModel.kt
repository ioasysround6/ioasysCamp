package br.com.ioasys.round6.presentation.viewmodels


import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import br.com.ioasys.round6.domain.usecase.LoginUseCase
import br.com.ioasys.round6.utils.*

class LoginViewModel(
    private val loginUseCase: LoginUseCase
) : ViewModel() {

    private val _loggedUserViewState = MutableLiveData<ViewState<Boolean>>()
    val loggedUserViewState = _loggedUserViewState as LiveData<ViewState<Boolean>>

    fun login(email: String, password: String) {
        _loggedUserViewState.postLoading()
        loginUseCase(
            params = LoginUseCase.Params(
                email = email,
                password = password
            ),
            onSuccess = {
                _loggedUserViewState.postSuccess(true)
            },
            onError = {
                _loggedUserViewState.postError(it)
            }
        )
    }

    fun resetViewState() {
        _loggedUserViewState.postNeutral()
    }
}
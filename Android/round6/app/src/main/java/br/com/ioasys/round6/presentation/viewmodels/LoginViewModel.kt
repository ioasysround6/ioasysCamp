package br.com.ioasys.round6.presentation.viewmodels


import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import br.com.ioasys.round6.domain.usecase.LoginUseCase
import br.com.ioasys.round6.utils.*
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch

class LoginViewModel(
    private val loginUseCase: LoginUseCase
) : ViewModel() {

    private val _loggedUserViewState = MutableLiveData<ViewState<Boolean>>()
    val loggedUserViewState = _loggedUserViewState as LiveData<ViewState<Boolean>>

    fun login(email: String, password: String) {

        viewModelScope.launch {
            _loggedUserViewState.postLoading()

            try {
                loginUseCase(
                    params = LoginUseCase.Params(
                        email = email,
                        password = password
                    )
                ).collect {
                    if (it.user.firstName.isEmpty().not()) {
                        _loggedUserViewState.postSuccess(true)
                    } else {
                        _loggedUserViewState.postError(Exception("Body do usuário vazio"))
                    }
                }
            } catch (e: Exception) {
                _loggedUserViewState.postError(e)

            }
        }
    }

    fun resetViewState() {
        _loggedUserViewState.postNeutral()
    }
}
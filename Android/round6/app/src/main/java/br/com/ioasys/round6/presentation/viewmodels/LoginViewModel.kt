package br.com.ioasys.round6.presentation.viewmodels


import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import br.com.ioasys.round6.utils.ViewState
import kotlinx.coroutines.launch

class LoginViewModel : ViewModel() {

    private val _loggedUserViewState = MutableLiveData<ViewState<Boolean>>()
    val loggedUserViewState = _loggedUserViewState as LiveData<ViewState<Boolean>>

    fun login(email: String, password: String) {

        viewModelScope.launch {
            if (email.isNotEmpty() && password.isNotEmpty()) {
                _loggedUserViewState.value = ViewState.Success(true)
            } else {
                _loggedUserViewState.value = ViewState.Error(Throwable())
            }
        }
    }

    fun resetViewState() {
        _loggedUserViewState.value = ViewState.Neutral
    }
}
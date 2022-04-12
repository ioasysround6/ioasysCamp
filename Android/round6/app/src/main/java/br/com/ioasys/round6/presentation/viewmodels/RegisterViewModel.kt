package br.com.ioasys.round6.presentation.viewmodels

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import br.com.ioasys.round6.utils.ViewState
import kotlinx.coroutines.launch

class RegisterViewModel : ViewModel() {

    private val _registeredUserViewState = MutableLiveData<ViewState<Boolean>>()
    val registeredUserViewState = _registeredUserViewState as LiveData<ViewState<Boolean>>

    fun register(
        name: String,
        lastName: String,
        birthDate: String,
        email: String,
        password: String,
    ) {

        viewModelScope.launch {
            if (name.isNotEmpty() && lastName.isNotEmpty() && birthDate.isNotEmpty()
                && email.isNotEmpty() && password.isNotEmpty()
            ) {
                _registeredUserViewState.value = ViewState.Success(true)
            } else {
                _registeredUserViewState.value = ViewState.Error(Throwable())
            }
        }
    }

    fun resetViewState() {
        _registeredUserViewState.value = ViewState.Neutral
    }
}
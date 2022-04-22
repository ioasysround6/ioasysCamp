package br.com.ioasys.round6.presentation.viewmodels

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import br.com.ioasys.round6.domain.usecase.RegisterUseCase
import br.com.ioasys.round6.utils.*

class RegisterViewModel(
    private val registerUseCase: RegisterUseCase
) : ViewModel() {

    private val _registeredUserViewState = MutableLiveData<ViewState<Boolean>>()
    val registeredUserViewState = _registeredUserViewState as LiveData<ViewState<Boolean>>

    fun register(
        firstName: String,
        lastName: String,
        birthDate: String,
        email: String,
        password: String,
    ) {

        _registeredUserViewState.postLoading()
        registerUseCase(
            params = RegisterUseCase.Params(
                firstName = firstName,
                lastName = lastName,
                birthDate = birthDate,
                email = email,
                password = password
            ),
            onSuccess = {
                _registeredUserViewState.postSuccess(true)
            },
            onError = {
                _registeredUserViewState.postError(it)
            }
        )
    }

    fun resetViewState() {
        _registeredUserViewState.postNeutral()
    }
}
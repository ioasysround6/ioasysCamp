package br.com.ioasys.round6.di

import br.com.ioasys.round6.domain.usecase.LoginUseCase
import br.com.ioasys.round6.domain.usecase.RegisterUseCase
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import org.koin.dsl.module

val domainModule = module {

    single { CoroutineScope(Dispatchers.IO) }

    factory { LoginUseCase(get(), get()) }
    factory { RegisterUseCase(get(), get()) }
}
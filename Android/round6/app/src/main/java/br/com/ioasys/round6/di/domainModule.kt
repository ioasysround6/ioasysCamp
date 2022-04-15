package br.com.ioasys.round6.di

import br.com.ioasys.round6.domain.usecase.LoginUseCase
import org.koin.dsl.module

val domainModule = module {

    factory { LoginUseCase(get()) }
}
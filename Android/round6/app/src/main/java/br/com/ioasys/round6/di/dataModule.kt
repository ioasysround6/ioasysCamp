package br.com.ioasys.round6.di

import br.com.ioasys.round6.data.repositories.LoginRepositoryImpl
import br.com.ioasys.round6.domain.repositories.LoginRepository
import org.koin.dsl.module

val dataModule = module {

    single<LoginRepository> {
        LoginRepositoryImpl(get())
    }
}
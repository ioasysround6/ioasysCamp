package br.com.ioasys.round6.di

import br.com.ioasys.round6.data.repositories.CommunityRepositoryImpl
import br.com.ioasys.round6.data.repositories.LoginRepositoryImpl
import br.com.ioasys.round6.data.repositories.TourRepositoryImpl
import br.com.ioasys.round6.domain.repositories.CommunityRepository
import br.com.ioasys.round6.domain.repositories.LoginRepository
import br.com.ioasys.round6.domain.repositories.TourRepository
import org.koin.dsl.module

val dataModule = module {

    single<CommunityRepository> {
        CommunityRepositoryImpl(get())
    }

    single<TourRepository> {
        TourRepositoryImpl(get(), get())
    }

    single<LoginRepository> {
        LoginRepositoryImpl(get(), get())
    }
}
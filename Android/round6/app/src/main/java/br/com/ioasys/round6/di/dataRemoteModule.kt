package br.com.ioasys.round6.di

import br.com.ioasys.round6.data.data_source.remote.LoginRemoteDataSource
import br.com.ioasys.round6.data_remote.data_source.LoginRemoteDataSourceImpl
import br.com.ioasys.round6.data_remote.data_source.RegisterRemoteDataSourceImpl
import br.com.ioasys.round6.data_remote.service.AuthService
import br.com.ioasys.round6.data_remote.utils.ApiConstants
import br.com.ioasys.round6.data_remote.utils.WebServiceFactory
import br.com.ioasys.round6.domain.repositories.RegisterRepository
import org.koin.dsl.module

val dataRemoteModule = module {
    single<AuthService> {
        WebServiceFactory.createWebService(
            okHttpClient = get(),
            url = ApiConstants.BASE_URL
        )
    }

    single { WebServiceFactory.providerOkHttpClient() }

    single<LoginRemoteDataSource> {
        LoginRemoteDataSourceImpl(get())
    }

    single<RegisterRepository> {
        RegisterRemoteDataSourceImpl(get())
    }
}
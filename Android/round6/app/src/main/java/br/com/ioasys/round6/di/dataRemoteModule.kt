package br.com.ioasys.round6.di

import br.com.ioasys.round6.data.data_source.remote.CommunityRemoteDataSource
import br.com.ioasys.round6.data.data_source.remote.LoginRemoteDataSource
import br.com.ioasys.round6.data.data_source.remote.TourRemoteDataSource
import br.com.ioasys.round6.data_remote.data_source.CommunityRemoteDataSourceImpl
import br.com.ioasys.round6.data_remote.data_source.LoginRemoteDataSourceImpl
import br.com.ioasys.round6.data_remote.data_source.RegisterRemoteDataSourceImpl
import br.com.ioasys.round6.data_remote.data_source.TourRemoteDataSourceImpl
import br.com.ioasys.round6.data_remote.service.AuthService
import br.com.ioasys.round6.data_remote.service.CommunityService
import br.com.ioasys.round6.data_remote.service.TourService
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

    single<TourService> {
        WebServiceFactory.createWebService(
            okHttpClient = get(),
            url = ApiConstants.BASE_URL
        )
    }

    single<CommunityService> {
        WebServiceFactory.createWebService(
            okHttpClient = get(),
            url = ApiConstants.BASE_URL
        )
    }

    single { WebServiceFactory.providerOkHttpClient() }

    single<CommunityRemoteDataSource> {
        CommunityRemoteDataSourceImpl(get())
    }

    single<TourRemoteDataSource> {
        TourRemoteDataSourceImpl(get())
    }

    single<LoginRemoteDataSource> {
        LoginRemoteDataSourceImpl(get())
    }

    single<RegisterRepository> {
        RegisterRemoteDataSourceImpl(get())
    }
}
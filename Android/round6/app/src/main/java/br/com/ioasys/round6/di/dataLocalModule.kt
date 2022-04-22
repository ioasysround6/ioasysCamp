package br.com.ioasys.round6.di

import br.com.ioasys.round6.data.data_source.local.LoginLocalDataSource
import br.com.ioasys.round6.data.data_source.local.TourLocalDataSource
import br.com.ioasys.round6.data_local.data_source.LoginLocalDataSourceImpl
import br.com.ioasys.round6.data_local.data_source.TourLocalDataSourceImpl
import br.com.ioasys.round6.data_local.utils.SharedPreferencesHelper
import org.koin.android.ext.koin.androidContext
import org.koin.dsl.module

val dataLocalModule = module {

    single { SharedPreferencesHelper(androidContext()) }
    single<LoginLocalDataSource> { LoginLocalDataSourceImpl(get()) }
    single<TourLocalDataSource> { TourLocalDataSourceImpl(get(), get()) }
}
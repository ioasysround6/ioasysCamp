package br.com.ioasys.round6.di

import br.com.ioasys.round6.domain.usecase.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import org.koin.dsl.module

val domainModule = module {

    single { CoroutineScope(Dispatchers.IO) }

    factory { LoginUseCase(get(), get()) }
    factory { RegisterUseCase(get(), get()) }
    factory { GetToursUseCase(get(), get()) }
    factory { GetCommunitiesUseCase(get(), get()) }
    factory { SaveTourListUseCase(get(), get()) }
}
package br.com.ioasys.round6.di

import androidx.room.Room
import br.com.ioasys.round6.data_local.data_base.TourDataBase
import br.com.ioasys.round6.data_local.utils.LocalConstants.TOUR_DATABASE_NAME
import org.koin.android.ext.koin.androidContext
import org.koin.dsl.module

val dataBaseModule = module {

    single {
        Room.databaseBuilder(
            androidContext(),
            TourDataBase::class.java,
            TOUR_DATABASE_NAME
        ).build()
    }

    single { get<TourDataBase>().tourDao() }
}
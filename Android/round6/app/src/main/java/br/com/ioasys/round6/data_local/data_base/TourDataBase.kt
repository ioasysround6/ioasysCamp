package br.com.ioasys.round6.data_local.data_base

import androidx.room.Database
import androidx.room.RoomDatabase
import br.com.ioasys.round6.data_local.model.TourDataLocal

@Database(entities = [TourDataLocal::class], version = 1)
abstract class TourDataBase : RoomDatabase() {

    abstract fun tourDao(): TourDao

}
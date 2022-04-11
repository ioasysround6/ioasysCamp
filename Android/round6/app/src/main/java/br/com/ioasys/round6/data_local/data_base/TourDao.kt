package br.com.ioasys.round6.data_local.data_base

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import br.com.ioasys.round6.data_local.model.TourDataLocal

@Dao
interface TourDao {

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun addTours(tourList: List<TourDataLocal>)

    @Query("SELECT * FROM Tours")
    fun getTours(): List<TourDataLocal>
}
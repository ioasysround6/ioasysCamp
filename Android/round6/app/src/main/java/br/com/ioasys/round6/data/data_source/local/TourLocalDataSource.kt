package br.com.ioasys.round6.data.data_source.local

import br.com.ioasys.round6.domain.model.Tour
import kotlinx.coroutines.flow.Flow

interface TourLocalDataSource {

    fun getToken(): Flow<String>
    fun saveTours(tourList: List<Tour>)
    fun getTours(): Flow<List<Tour>>
}
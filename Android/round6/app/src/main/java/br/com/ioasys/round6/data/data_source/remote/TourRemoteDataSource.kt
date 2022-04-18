package br.com.ioasys.round6.data.data_source.remote

import br.com.ioasys.round6.domain.model.Tour
import kotlinx.coroutines.flow.Flow

interface TourRemoteDataSource {

    fun getTours(): Flow<List<Tour>>
}
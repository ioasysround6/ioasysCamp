package br.com.ioasys.round6.domain.repositories

import br.com.ioasys.round6.domain.model.Tour
import kotlinx.coroutines.flow.Flow

interface TourRepository {

    suspend fun getTours(): Flow<List<Tour>>
}
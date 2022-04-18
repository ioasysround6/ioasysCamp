package br.com.ioasys.round6.data.repositories

import br.com.ioasys.round6.data.data_source.remote.TourRemoteDataSource
import br.com.ioasys.round6.domain.model.Tour
import br.com.ioasys.round6.domain.repositories.TourRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.flow

class TourRepositoryImpl(
    private val tourRemoteDataSource: TourRemoteDataSource
) : TourRepository {

    override fun getTours(): Flow<List<Tour>> = flow {
        tourRemoteDataSource.getTours().collect {
            emit(it)
        }
    }
}
package br.com.ioasys.round6.data.repositories

import br.com.ioasys.round6.data.data_source.local.TourLocalDataSource
import br.com.ioasys.round6.data.data_source.remote.TourRemoteDataSource
import br.com.ioasys.round6.domain.model.Tour
import br.com.ioasys.round6.domain.repositories.TourRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.flow

class TourRepositoryImpl(
    private val tourRemoteDataSource: TourRemoteDataSource,
    private val tourLocalDataSource: TourLocalDataSource
) : TourRepository {

    override fun getTours(): Flow<List<Tour>> = flow {
        tourLocalDataSource.getToken().collect { token ->
            if (token.isNotEmpty()) {
                tourRemoteDataSource.getTours().collect { tourList ->
                    emit(tourList)
                }
            } else {
                tourLocalDataSource.getTours().collect { tourList ->
                    emit(tourList)
                }
            }
        }
    }

    override fun saveTours(tourList: List<Tour>) = tourLocalDataSource.saveTours(
        tourList = tourList
    )
}
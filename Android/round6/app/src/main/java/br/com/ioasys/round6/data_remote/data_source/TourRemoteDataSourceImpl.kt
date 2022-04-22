package br.com.ioasys.round6.data_remote.data_source

import br.com.ioasys.round6.data.data_source.remote.TourRemoteDataSource
import br.com.ioasys.round6.data_remote.mappers.toDomain
import br.com.ioasys.round6.data_remote.service.TourService
import br.com.ioasys.round6.domain.model.Tour
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

class TourRemoteDataSourceImpl(
    private val tourService: TourService
) : TourRemoteDataSource {

    override fun getTours(): Flow<List<Tour>> = flow {
        val response = tourService.getTours()
        if (response.isSuccessful) {
            response.body()?.let { tourResponse ->
                emit(tourResponse.toDomain())
            }
        }
    }
}
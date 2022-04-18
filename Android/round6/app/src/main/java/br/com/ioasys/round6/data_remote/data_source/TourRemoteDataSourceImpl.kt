package br.com.ioasys.round6.data_remote.data_source

import br.com.ioasys.round6.data_remote.service.TourService
import br.com.ioasys.round6.domain.model.Tour
import br.com.ioasys.round6.domain.repositories.TourRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

class TourRemoteDataSourceImpl(
    private val tourService: TourService
) : TourRepository {

    override fun getTours(): Flow<List<Tour>> = flow {
        val tours = tourService.getTours()
        emit(tours)
    }
}
package br.com.ioasys.round6.domain.usecase

import br.com.ioasys.round6.domain.model.Tour
import br.com.ioasys.round6.domain.repositories.TourRepository
import br.com.ioasys.round6.domain.utils.UseCase
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.Flow

class GetToursUseCase(
    private val tourRepository: TourRepository,
    scope: CoroutineScope
) : UseCase<GetToursUseCase, List<Tour>>(scope = scope) {

    override fun run(params: GetToursUseCase?): Flow<List<Tour>> =
        tourRepository.getTours()
}
package br.com.ioasys.round6.domain.usecase

import br.com.ioasys.round6.domain.model.Tour
import br.com.ioasys.round6.domain.repositories.TourRepository
import br.com.ioasys.round6.domain.utils.UseCase
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flowOf

class SaveTourListUseCase(
    private val tourRepository: TourRepository,
    scope: CoroutineScope
) : UseCase<SaveTourListUseCase.Params, Unit>(scope = scope) {

    override fun run(params: Params?): Flow<Unit> = flowOf(
        tourRepository.saveTours(
            tourList = params?.tourList ?: listOf()
        )
    )

    data class Params(
        val tourList: List<Tour>
    )
}
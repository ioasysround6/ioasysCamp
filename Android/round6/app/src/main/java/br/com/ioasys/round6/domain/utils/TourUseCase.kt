package br.com.ioasys.round6.domain.utils

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.Flow

abstract class TourUseCase<Source>(
    private val scope: CoroutineScope
) {

    abstract suspend fun execute(): Flow<Source>
}
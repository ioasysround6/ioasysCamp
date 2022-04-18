package br.com.ioasys.round6.domain.usecase

import br.com.ioasys.round6.domain.model.Community
import br.com.ioasys.round6.domain.repositories.CommunityRepository
import br.com.ioasys.round6.domain.utils.UseCase
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.Flow

class GetCommunitiesUseCase(
    private val communityRepository: CommunityRepository,
    scope: CoroutineScope
) : UseCase<GetToursUseCase, List<Community>>(scope = scope) {

    override fun run(params: GetToursUseCase?): Flow<List<Community>> =
        communityRepository.getCommunities()
}
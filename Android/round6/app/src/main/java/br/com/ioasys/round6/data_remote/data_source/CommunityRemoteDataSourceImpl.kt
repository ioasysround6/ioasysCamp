package br.com.ioasys.round6.data_remote.data_source

import br.com.ioasys.round6.data_remote.service.CommunityService
import br.com.ioasys.round6.domain.model.Community
import br.com.ioasys.round6.domain.repositories.CommunityRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

class CommunityRemoteDataSourceImpl(
    private val communityService: CommunityService
) : CommunityRepository {

    override fun getCommunities(): Flow<List<Community>> = flow {
        val communities = communityService.getCommunities()
        emit(communities)
    }
}
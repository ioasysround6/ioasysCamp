package br.com.ioasys.round6.data_remote.data_source

import br.com.ioasys.round6.data.data_source.remote.CommunityRemoteDataSource
import br.com.ioasys.round6.data_remote.mappers.toDomain
import br.com.ioasys.round6.data_remote.service.CommunityService
import br.com.ioasys.round6.domain.model.Community
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

class CommunityRemoteDataSourceImpl(
    private val communityService: CommunityService
) : CommunityRemoteDataSource {

    override fun getCommunities(): Flow<List<Community>> = flow {
        val response = communityService.getCommunities()
        if (response.isSuccessful) {
            response.body()?.let { communityResponse ->
                emit(communityResponse.toDomain())
            }
        }
    }
}
package br.com.ioasys.round6.data.repositories

import br.com.ioasys.round6.data.data_source.remote.CommunityRemoteDataSource
import br.com.ioasys.round6.domain.model.Community
import br.com.ioasys.round6.domain.repositories.CommunityRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.flow

class CommunityRepositoryImpl(
    private val communityRemoteDataSource: CommunityRemoteDataSource
) : CommunityRepository {

    override fun getCommunities(): Flow<List<Community>> = flow {
        communityRemoteDataSource.getCommunities().collect {
            emit(it)
        }
    }
}
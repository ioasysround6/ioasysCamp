package br.com.ioasys.round6.data.data_source.remote

import br.com.ioasys.round6.domain.model.Community
import kotlinx.coroutines.flow.Flow

interface CommunityRemoteDataSource {

    fun getCommunities(): Flow<List<Community>>
}
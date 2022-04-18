package br.com.ioasys.round6.domain.repositories

import br.com.ioasys.round6.domain.model.Community
import kotlinx.coroutines.flow.Flow

interface CommunityRepository {

    suspend fun getCommunities(): Flow<List<Community>>
}
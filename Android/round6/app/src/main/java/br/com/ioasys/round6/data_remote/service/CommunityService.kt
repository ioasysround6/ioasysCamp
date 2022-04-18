package br.com.ioasys.round6.data_remote.service

import br.com.ioasys.round6.domain.model.Community
import retrofit2.http.GET

interface CommunityService {

    @GET("stories")
    suspend fun getCommunities(): List<Community>
}
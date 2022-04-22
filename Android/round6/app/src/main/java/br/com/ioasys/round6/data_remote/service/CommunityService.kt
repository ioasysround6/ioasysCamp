package br.com.ioasys.round6.data_remote.service

import br.com.ioasys.round6.data_remote.model.CommunityResponse
import retrofit2.Response
import retrofit2.http.GET

interface CommunityService {

    @GET("stories")
    suspend fun getCommunities(): Response<List<CommunityResponse>>
}
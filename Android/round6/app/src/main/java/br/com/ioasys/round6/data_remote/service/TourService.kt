package br.com.ioasys.round6.data_remote.service

import br.com.ioasys.round6.data_remote.model.TourResponse
import retrofit2.Response
import retrofit2.http.GET

interface TourService {

    @GET("tours")
    suspend fun getTours(): Response<List<TourResponse>>
}
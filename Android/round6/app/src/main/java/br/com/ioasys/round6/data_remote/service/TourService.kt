package br.com.ioasys.round6.data_remote.service

import br.com.ioasys.round6.domain.model.Tour
import retrofit2.http.GET

interface TourService {

    @GET("tours")
    suspend fun getTours(): List<Tour>
}
package br.com.ioasys.round6.data_remote.utils

import okhttp3.Dispatcher
import okhttp3.OkHttpClient
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.create
import java.util.concurrent.TimeUnit

object WebServiceFactory {
    inline fun <reified T> createWebService(
        okHttpClient: OkHttpClient,
        url: String = ""
    ): T {
        return Retrofit.Builder()
            .baseUrl(url)
            .client(okHttpClient)
            .addConverterFactory(GsonConverterFactory.create())
            .build().create()
    }

    fun providerOkHttpClient(): OkHttpClient =
        OkHttpClient.Builder()
            .dispatcher(Dispatcher().apply {
                maxRequests = 1
                maxRequestsPerHost = 1
            })
            .connectTimeout(30L, TimeUnit.SECONDS)
            .readTimeout(30L, TimeUnit.SECONDS)
            .writeTimeout(30L, TimeUnit.SECONDS)
            .build()
}
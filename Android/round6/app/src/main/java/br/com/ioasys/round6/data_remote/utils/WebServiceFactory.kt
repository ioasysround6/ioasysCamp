package br.com.ioasys.round6.data_remote.utils

import okhttp3.Dispatcher
import okhttp3.OkHttpClient
import okhttp3.ResponseBody
import retrofit2.Converter
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.create
import java.lang.reflect.Type
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
            .addConverterFactory(UnitConverterFactory)
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

    object UnitConverterFactory : Converter.Factory() {
        override fun responseBodyConverter(
            type: Type,
            annotations: Array<out Annotation>,
            retrofit: Retrofit
        ): Converter<ResponseBody, *>? {
            return if (type == Unit::class.java) UnitConverter else null
        }

        private object UnitConverter : Converter<ResponseBody, Unit> {

            override fun convert(value: ResponseBody) {
                value.close()
            }
        }
    }
}
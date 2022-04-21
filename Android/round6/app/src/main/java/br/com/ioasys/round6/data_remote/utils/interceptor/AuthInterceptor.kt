package br.com.ioasys.round6.data_remote.utils.interceptor

import okhttp3.Interceptor
import okhttp3.Response

class AuthInterceptor : Interceptor {

    override fun intercept(chain: Interceptor.Chain): Response {
        var request = chain.request()
        request = request.newBuilder().header("Authorization", "")
            .build()
        return chain.proceed(request)
    }
}
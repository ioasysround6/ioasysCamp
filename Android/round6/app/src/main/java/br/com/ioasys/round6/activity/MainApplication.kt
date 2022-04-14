package br.com.ioasys.round6.activity

import android.app.Application
import br.com.ioasys.round6.di.dataBaseModule
import br.com.ioasys.round6.di.dataModule
import br.com.ioasys.round6.di.dataRemoteModule
import br.com.ioasys.round6.di.presentationModule
import org.koin.android.ext.koin.androidContext
import org.koin.core.context.startKoin

class MainApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        startKoin {
            modules(
                presentationModule,
                dataModule,
                dataRemoteModule,
                dataBaseModule
            ).androidContext(applicationContext)
        }
    }
}
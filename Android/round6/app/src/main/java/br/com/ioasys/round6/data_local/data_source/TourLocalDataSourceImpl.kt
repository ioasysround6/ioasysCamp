package br.com.ioasys.round6.data_local.data_source

import br.com.ioasys.round6.data.data_source.local.TourLocalDataSource
import br.com.ioasys.round6.data_local.data_base.TourDao
import br.com.ioasys.round6.data_local.mappers.toDao
import br.com.ioasys.round6.data_local.mappers.toDomain
import br.com.ioasys.round6.data_local.utils.LocalConstants.TOKEN_KEY
import br.com.ioasys.round6.data_local.utils.SharedPreferencesHelper
import br.com.ioasys.round6.domain.model.Tour
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

class TourLocalDataSourceImpl(
    private val sharedPreferencesHelper: SharedPreferencesHelper,
    private val tourDao: TourDao
) : TourLocalDataSource {

    override fun getToken(): Flow<String> = flow {
        emit(sharedPreferencesHelper.getString(TOKEN_KEY))
    }

    override fun saveTours(tourList: List<Tour>) = tourDao.addTours(
        tourList = tourList.map { it.toDao() }
    )

    override fun getTours(): Flow<List<Tour>> = flow {
        val tourList = tourDao.getTours().map { it.toDomain() }
        emit(tourList)
    }
}
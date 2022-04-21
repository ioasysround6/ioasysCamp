package br.com.ioasys.round6.presentation.viewmodels

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import br.com.ioasys.round6.domain.model.Community
import br.com.ioasys.round6.domain.model.Tour
import br.com.ioasys.round6.domain.usecase.GetCommunitiesUseCase
import br.com.ioasys.round6.domain.usecase.GetToursUseCase
import br.com.ioasys.round6.domain.usecase.SaveTourListUseCase
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch

class HomeViewModel(
    private val getToursUseCase: GetToursUseCase,
    private val getCommunitiesUseCase: GetCommunitiesUseCase,
    private val saveTourListUseCase: SaveTourListUseCase
) : ViewModel() {

    private val _listTour = MutableLiveData<List<Tour>>()
    val listTour: LiveData<List<Tour>>
        get() = _listTour

    private val _listCommunity = MutableLiveData<List<Community>>()
    val listCommunity: LiveData<List<Community>>
        get() = _listCommunity

    init {
        fetchTours()
        fetchCommunities()
    }

    private fun fetchCommunities() {
        viewModelScope.launch {
            getCommunitiesUseCase.run().collect {
                _listCommunity.postValue(it)
            }
        }
    }

    private fun fetchTours() {
        viewModelScope.launch {
            getToursUseCase.run().collect {
                _listTour.postValue(it)
                saveTours(tourList = it)
            }
        }
    }

    private fun saveTours(tourList: List<Tour>) {
        saveTourListUseCase(
            params = SaveTourListUseCase.Params(
                tourList = tourList
            )
        )
    }
}
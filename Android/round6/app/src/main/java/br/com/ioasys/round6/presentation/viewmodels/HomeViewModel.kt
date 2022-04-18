package br.com.ioasys.round6.presentation.viewmodels

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import br.com.ioasys.round6.domain.model.Community
import br.com.ioasys.round6.domain.model.Tour
import br.com.ioasys.round6.domain.repositories.CommunityRepository
import br.com.ioasys.round6.domain.repositories.TourRepository
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch

class HomeViewModel(
    private val tourRepository: TourRepository,
    private val communityRepository: CommunityRepository
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
            communityRepository.getCommunities().collect {
                _listCommunity.value = it
            }
        }
    }

    private fun fetchTours() {
        viewModelScope.launch {
            tourRepository.getTours().collect {
                _listTour.value = it
            }
        }
    }
}
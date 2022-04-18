package br.com.ioasys.round6.presentation.viewmodels

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import br.com.ioasys.round6.domain.model.Tour
import br.com.ioasys.round6.domain.repositories.TourRepository
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch

class TourViewModel(
    private val tourRepository: TourRepository
) : ViewModel() {

    private val _listTour = MutableLiveData<List<Tour>>()
    val listTour: LiveData<List<Tour>>
        get() = _listTour

    init {
        fetchTours()
    }

    private fun fetchTours() {
        viewModelScope.launch {
            tourRepository.getTours().collect {
                _listTour.value = it
            }
        }
    }
}
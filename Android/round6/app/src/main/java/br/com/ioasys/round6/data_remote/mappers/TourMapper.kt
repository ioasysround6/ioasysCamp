package br.com.ioasys.round6.data_remote.mappers

import br.com.ioasys.round6.data_remote.model.TourResponse
import br.com.ioasys.round6.domain.model.Tour

fun List<TourResponse>.toDomain(): List<Tour> {
    return this.map {
        Tour(
            id = it.id,
            tourName = it.tourName,
            communityName = it.communityName,
            description = it.description,
            accommodation = it.accommodation,
            activities = it.activities,
            travelDate = it.travelDate,
            hint = it.hint,
            price = it.price,
            vacancies = it.vacancies,
            photo1 = it.photo1,
            photo2 = it.photo2,
            photo3 = it.photo3,
            createdAt = it.createdAt,
            updatedAt = it.updatedAt
        )
    }
}
package br.com.ioasys.round6.data_local.mappers

import br.com.ioasys.round6.data_local.model.TourDataLocal
import br.com.ioasys.round6.domain.model.Tour

fun Tour.toDao(): TourDataLocal = TourDataLocal(
    id = this.id,
    communityName = this.communityName,
    description = this.description,
    accommodation = this.accommodation,
    activities = this.activities,
    travelDate = this.travelDate,
    hint = this.hint,
    price = this.price,
    vacancies = this.vacancies,
    photo1 = this.photo1,
    photo2 = this.photo2,
    photo3 = this.photo3,
    tourName = this.tourName,
    createdAt = this.createdAt,
    updatedAt = this.updatedAt
)

fun TourDataLocal.toDomain(): Tour = Tour(
    id = this.id,
    communityName = this.communityName ?: "",
    description = this.description ?: "",
    accommodation = this.accommodation ?: "",
    activities = this.activities ?: "",
    travelDate = this.travelDate ?: "",
    hint = this.hint ?: "",
    price = this.price ?: "",
    vacancies = this.vacancies,
    photo1 = this.photo1 ?: "",
    photo2 = this.photo2 ?: "",
    photo3 = this.photo3 ?: "",
    createdAt = this.createdAt ?: "",
    updatedAt = this.updatedAt ?: "",
    tourName = this.tourName ?: ""
)
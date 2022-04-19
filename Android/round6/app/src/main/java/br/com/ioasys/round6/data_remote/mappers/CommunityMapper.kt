package br.com.ioasys.round6.data_remote.mappers

import br.com.ioasys.round6.data_remote.model.CommunityResponse
import br.com.ioasys.round6.domain.model.Community

fun List<CommunityResponse>.toDomain(): List<Community> {
    return this.map {
        Community(
            id = it.id,
            communityName = it.communityName,
            description = it.description,
            localization = it.localization,
            mainActivities = it.mainActivities,
            curiosities = it.curiosities,
            photo1 = it.photo1,
            photo2 = it.photo2,
            createdAt = it.createdAt,
            updatedAt = it.updatedAt,
            tour = it.tour
        )
    }
}
package br.com.ioasys.round6.domain.model

data class Community(
    val id: String,
    val communityName: String,
    val description: String,
    val localization: String,
    val mainActivities: String,
    val curiosities: String,
    val photo1: String,
    val photo2: String,
    val createdAt: String,
    val updatedAt: String,
    val tour: CommnunityTour
)

data class CommnunityTour(
    val id: String,
    val tourName: String
)
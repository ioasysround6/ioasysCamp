package br.com.ioasys.round6.domain.model

data class Tour(
    val id: String,
    val tourName: String,
    val communityName: String,
    val description: String,
    val accommodation: String,
    val activities: String,
    val travelDate: String,
    val hint: String,
    val price: String,
    val vacancies: Int,
    val photo1: String,
    val photo2: String,
    val photo3: String,
    val createdAt: String,
    val updatedAt: String,
)
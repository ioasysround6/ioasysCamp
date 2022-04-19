package br.com.ioasys.round6.data_remote.model

import com.google.gson.annotations.SerializedName

data class TourResponse(
    @SerializedName("id")
    val id: String,
    @SerializedName("tourName")
    val tourName: String,
    @SerializedName("communityName")
    val communityName: String,
    @SerializedName("description")
    val description: String,
    @SerializedName("accommodation")
    val accommodation: String,
    @SerializedName("activities")
    val activities: String,
    @SerializedName("travelDate")
    val travelDate: String,
    @SerializedName("hint")
    val hint: String,
    @SerializedName("price")
    val price: String,
    @SerializedName("vacancies")
    val vacancies: Int,
    @SerializedName("photo1")
    val photo1: String,
    @SerializedName("photo2")
    val photo2: String,
    @SerializedName("photo3")
    val photo3: String,
    @SerializedName("createdAt")
    val createdAt: String,
    @SerializedName("updatedAt")
    val updatedAt: String,
)
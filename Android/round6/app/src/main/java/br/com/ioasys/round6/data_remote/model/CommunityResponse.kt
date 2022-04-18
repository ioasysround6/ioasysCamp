package br.com.ioasys.round6.data_remote.model

import br.com.ioasys.round6.domain.model.CommnunityTour
import com.google.gson.annotations.SerializedName

data class CommunityResponse(
    @SerializedName("id")
    val id: String,
    @SerializedName("communityName")
    val communityName: String,
    @SerializedName("description")
    val description: String,
    @SerializedName("localization")
    val localization: String,
    @SerializedName("mainActivities")
    val mainActivities: String,
    @SerializedName("curiosities")
    val curiosities: String,
    @SerializedName("photo1")
    val photo1: String,
    @SerializedName("photo2")
    val photo2: String,
    @SerializedName("createdAt")
    val createdAt: String,
    @SerializedName("updatedAt")
    val updatedAt: String,
    @SerializedName("tour")
    val tour: CommnunityTour
)

data class CommunityTour(
    @SerializedName("id")
    val id: String,
    @SerializedName("tourName")
    val tourName: String
)
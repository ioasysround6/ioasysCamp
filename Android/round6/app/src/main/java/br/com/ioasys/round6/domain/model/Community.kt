package br.com.ioasys.round6.domain.model

data class Community(
    val id: Long,
    val communityName: String = "Mato Serrado",
    val description: String = "",
    val localization: String = "",
    val mainActivities: String = "",
    val curiosities: String = "",
    val photo1: String = "",
    val photo2: String = "",
    val createdAt: String = "",
    val updatedAt: String = "",
    val tour: String = ""
) {

    companion object {
        fun getCommunity() = listOf(
            Community(
                id = 1,
                communityName = "Mato Serrado"
            ),
            Community(
                id = 2,
                communityName = "Mato Serrado"
            ),
            Community(
                id = 3,
                communityName = "Mato Serrado"
            )
        )
    }
}

//data class CommunityTour(
//    val id: String,
//    val tourName: String
//)

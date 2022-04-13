package br.com.ioasys.round6.data_local.model

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "Tours")
data class TourDataLocal(
    @PrimaryKey(autoGenerate = true)
    val id: Long,
    val communityName: String? = null,
    val description: String? = null,
    val accommodation: String? = null,
    val activities: String? = null,
    val travelDate: String? = null,
    val hint: String? = null,
    val price: String? = null,
    val vacancies: String? = null,
    val photo1: String? = null,
    val photo2: String? = null,
    val photo3: String? = null,
)
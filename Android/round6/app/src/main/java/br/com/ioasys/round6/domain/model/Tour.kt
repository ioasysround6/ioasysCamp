package br.com.ioasys.round6.domain.model

data class Tour(
    val id: Long,
    val communityName: String = "Moita Redonda",
    val description: String = "Exposição da cultura artesanal no Ceará",
    val accommodation: String = "Casa de Joana",
    val activities: String = "Preparar vasos artesanais",
    val travelDate: String = "12/09 até 22/09",
    val hint: String = "Leve o protetor solar",
    val price: String = "R$ 105",
    val vacancies: String = "10",
    val photo1: String = "",
    val photo2: String? = null,
    val photo3: String? = null,
)

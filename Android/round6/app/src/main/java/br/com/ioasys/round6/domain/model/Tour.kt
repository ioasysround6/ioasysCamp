package br.com.ioasys.round6.domain.model

data class Tour(
    val id: Long,
    val tourName: String = "Mãos na argila!",
    val communityName: String = "Mato Serrado",
    val description: String = "Conheça de perto uma das comunidades tradicionais produtoras de artesanato de argila, Mato Serrado. Localizada em Crato, a 8 horas de Fortaleza, é uma comunidade centenária e um local fantástico repleto de figuras icônicas no artesanato cearense!",
    val accommodation: String = "Você ficará hospedado na pousada de Dona Maria, ela faz uma tapioca tapioca orgânica com alimentos frescos no café da manhã, que não tem igual. O local é próximo do Rio Preguiças, onde você terá tranquilidade, muito verde e ar puro ao seu redor.",
    val activities: String = "Visita na casa de um dos artesãos locais, acompanhando todas as etapas da fabricação de uma peça de argila artesanal, podendo inclusive moldar a sua própria peça de barro Trilha até o Rio Preguiças com um guia local, com um momento de meditação e relaxamento, além de um banho relaxante e revigorante com argila úmida recém extraída do rio no final Visita ao museu Argilas Vivas onde conhecerá os projetos locais, além de assistir uma orquestra infanto-juvenil que utiliza instrumentos musicais feitos com argila",
    val travelDate: String = "Do dia 21/06 a 23/06 4 dias e 3 noites de passeio.",
    val hint: String = "Leve roupas leves e que te protejam do sol Leve seus materiais individuais para evitar o uso de descartáveis, em respeito a natureza Tire muitas fotos mas não divulgue imagens das pessoas da comunidade sem a autorização delas Divirta-se bastante e não esqueça de postar o seu diário de viagem no nosso feed",
    val price: String = "R$ 600.00",
    val vacancies: String = "7",
    val photo1: String = "",
    val photo2: String? = null,
    val photo3: String? = null,
) {

    companion object {

        fun getMockList() = listOf(
            Tour(
                id = 1,
                tourName = "Mãos na argila!",
                communityName = "Mato Serrado"
            ),
            Tour(
                id = 2,
                tourName = "Mãos na argila!",
                communityName = "Mato Serrado"
            ),
            Tour(
                id = 3,
                tourName = "Mãos na argila!",
                communityName = "Mato Serrado"
            )
        )
    }
}

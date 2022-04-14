import React from 'react';

import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ScreenView from '../components/ScreenView';

import BackButton from '../../src/assets/back.png'
import { colors } from '../styles/colors';

import Binoculo from '../../src/assets/PNG/binoculo.png';
import Send from '../../src/assets/PNG/send.png';
import Ecologic from '../../src/assets/PNG/ecologic.png';

import Turismo1 from '../../src/assets/PNG/Turismo1.png';
import Turismo2 from '../../src/assets/PNG/Turismo2.png';

export default function CommunityTourism() {
    return (
        <ScreenView>
            <Header icon={BackButton} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.viewAreaImage}>
                    <Image source={Turismo1} style={styles.image} />
                </View>

                <View>
                    <View style={styles.viewTitle}>
                        <Image source={Binoculo} style={styles.icon} />
                        <Text style={styles.textTitle}>O que é?</Text>
                    </View>
                    <Text style={styles.textHistory}>
                        O turismo de base comunitária diferentemente do turismo tradicional tem como foco a
                        experiência do viajante no local de destino. A viagem é toda planejada para que a pessoa
                        participe do dia a dia da comunidade local, realizando as mesmas atividades que os moradores realizam,
                        além de ter a oportunidade de conhecer os costumes da região.
                    </Text>
                    <View style={styles.viewTitle}>
                        <Image source={Send} style={styles.icon} />
                        <Text style={styles.textTitle}>Como acontece?</Text>
                    </View>
                    <Text style={styles.textHistory}>
                        Geralmente o turista fica hospedado na casa de um morador da comunidade, faz as refeições junto
                        com a família e participa da rotina de atividades com essa família. Ele pode aprender e ajudar com
                        o plantio, a cozinha, trabalhando com peças de artesanado tradicionais na comunidade, entre várias outras atividades.
                        A ideia é colocar as comunidades locais como protagonistas e promover um estilo de viagem sustentável,
                        com respeito à natureza, às populações e à cultura.
                    </Text>
                    <View style={styles.viewAreaImage}>
                        <Image source={Turismo2} style={styles.image} />
                    </View>
                    <View style={styles.viewTitle}>
                        <Image source={Ecologic} style={styles.icon} />
                        <Text style={styles.textTitle}>Como gera desenvolvimento?</Text>
                    </View>
                    <Text style={styles.textHistory}>
                        O turismo de base comunitárioa serve como uma alternativa de renda para populações dessas
                        comunidades, uma oportunidade de valorização da cultura local e uma forma de integrar os jovens ao modo de vida local.
                        O incentivo ao turimo de base comunitária pode ajudar na meta de erradicação da pobreza.
                        Isso porque esse estilo de viagem ajuda a movimentar a economia local, dá maior visibilidade
                        para essas comunidades e proporciona maior interesse pela cultura dessas pessoas.
                        E tudo isso ajuda a desconstruir a visão de que as pessoas dessas comunidades precisariam mudar
                        para a capital em busca de oportunidades melhores, uma vez que elas conseguem se desenvolver e manter
                        uma condição digna de vida dentro da sua cultura.
                    </Text>
                </View>
            </ScrollView>
        </ScreenView>
    );

}

const styles = StyleSheet.create({
    viewAreaImage: {
        width: '100%',
        height: 300,
        marginTop: 40,
        marginBottom: 40
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        borderRadius: 20
    },
    viewTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.neutralDarker,
        marginBottom: 12
    },
    textHistory: {
        marginBottom: 24,
        color: colors.neutralDark,
        fontSize: 12,
        fontWeight: '400'
    },
    icon: {
        marginRight: 12
    }
})
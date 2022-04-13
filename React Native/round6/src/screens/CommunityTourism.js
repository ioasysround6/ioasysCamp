import React from 'react';

import { View, Text, Image, ScrollView } from 'react-native';
import Header from '../components/Header';
import ScreenView from '../components/ScreenView';

import BackButton from '../../src/assets/back.png'
import { colors } from '../styles/colors';

import Binoculo from '../../src/assets/PNG/binoculo.png';
import Send from '../../src/assets/PNG/send.png';
import Ecologic from '../../src/assets/PNG/ecologic.png';

export default function CommunityTourism() {
    return (
        <ScreenView>
            <Header icon={BackButton} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ width: '100%', height: 300, backgroundColor: '#131313', marginTop: 40, marginBottom: 40 }}>
                    <Image />
                </View>

                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Image source={Binoculo} style={{ marginRight: 12 }} />
                        <Text style={{ fontSize: 18, fontWeight: '600', color: colors.neutralDarker, marginBottom: 12 }}>O que é?</Text>
                    </View>
                    <Text style={{ marginBottom: 24, color: colors.neutralDark, fontSize: 12, fontWeight: '400' }}>
                        O turismo de base comunitária diferentemente do turismo tradicional tem como foco a
                        experiência do viajante no local de destino. A viagem é toda planejada para que a pessoa
                        participe do dia a dia da comunidade local, realizando as mesmas atividades que os moradores realizam,
                        além de ter a oportunidade de conhecer os costumes da região.
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 12 }}>
                        <Image source={Send} style={{ marginRight: 12 }} />
                        <Text style={{ fontSize: 18, fontWeight: '600', color: colors.neutralDarker }}>Como acontece?</Text>
                    </View>
                    <Text style={{ color: colors.neutralDark, fontSize: 12, fontWeight: '400' }}>
                        Geralmente o turista fica hospedado na casa de um morador da comunidade, faz as refeições junto
                        com a família e participa da rotina de atividades com essa família. Ele pode aprender e ajudar com
                        o plantio, a cozinha, trabalhando com peças de artesanado tradicionais na comunidade, entre várias outras atividades.
                        A ideia é colocar as comunidades locais como protagonistas e promover um estilo de viagem sustentável,
                        com respeito à natureza, às populações e à cultura.
                    </Text>
                    <View style={{ width: '100%', height: 300, backgroundColor: '#131313', marginTop: 40, marginBottom: 40 }}>
                        <Image />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 12 }}>
                        <Image source={Ecologic} style={{ marginRight: 12 }} />
                        <Text style={{ fontSize: 18, fontWeight: '600', color: colors.neutralDarker }}>Como gera desenvolvimento?</Text>
                    </View>
                    <Text style={{ marginBottom: 24, color: colors.neutralDark, fontSize: 12, fontWeight: '400' }}>
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
import React from 'react';
import { colors } from '../styles/colors';
import { View, Text, Image, ScrollView } from 'react-native';
import ScreenView from '../components/ScreenView';
import Header from '../components/Header';

import ArrowBackButton from '../../src/assets/SVG/ArrowBackButton.svg';

import BackButton from '../../src/assets/back.png';
import PhotoJoao from '../../src/assets/PNG/UsuarioJoao.png';
import PhotoFelipe from '../../src/assets/PNG/UsuarioFelipe.png';
import PhotoPaula from '../../src/assets/PNG/UsuarioPaula.png';

import DiarioPaula from '../../src/assets/PNG/DiarioPaula.png';
import DiarioJoao from '../../src/assets/PNG/DiarioJoao.png';

import BoxIcon from '../assets/SVG/Box.svg';



import ButtonLarge from '../components/ButtonLarge';

export function Diary() {

  function handleClickNewPost(){
      alert('Ainda não é possível fazer uma publicação')
  }

  return (
    <ScreenView>
      <Header/>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1 }}>
          <View style={{ width: '100%', marginTop: 40, marginBottom: 32 }}>
            <Text style={{ fontSize: 12, fontWeight: '400', color: colors.neutralDark }}>
              Compartilhe com a gente um pouquinho da sua experiência em nossos pacotes de turismo aqui no nosso feed!
            </Text>
          </View>
          <View style={{ marginBottom: 32 }}>
            <ButtonLarge titulo="Fazer um post" backColor={colors.secondaryDefault} onPress={handleClickNewPost} />
          </View>
          <View style={{ borderBottomWidth: 1, borderColor: colors.neutralMediumLight, width: '100%', marginBottom: 24 }}></View>
          <View style={{ width: '100%', height: 250, marginBottom: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={PhotoFelipe} style={{ width: 60, height: 60, borderRadius: 60 + 60 / 2 }} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ marginLeft: 12, color: colors.neutralDarker, fontSize: 14, fontWeight: '600' }}>Felipe dos Santos</Text>
                <Text style={{ color: colors.neutralDark, fontSize: 12, fontWeight: '400', marginLeft: 12 }}>Rio de Janeiro, RJ</Text>
              </View>
            </View>
            <View style={{ marginTop: 26 }}>
              <Text style={{ fontWeight: '600', fontSize: 14, color: colors.neutralDarker, marginBottom: 4 }}>Experiência incrível!!</Text>
              <Text style={{ fontSize: 12, fontWeight: '400', color: colors.neutralDark }}>Fiz o passeio para Serra do Paraíso na semana passada com um amigo! Cada um ficou na casa de
                uma família por lá e foi simplesmente INCRÍVEL! Ajudamos na colheita da estação,
                participamos dos eventos da comunidade e todos foram muito receptivos com a gente.
                Fizemos muitoas amizades por lá!</Text>
            </View>
            <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>01/11/2021</Text>
              <BoxIcon width="18.57" height="18.57" />
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: colors.neutralMediumLight, width: '100%', marginBottom: 24, marginTop: 16 }}></View>
          </View>

          <View style={{ flex: 2, marginBottom: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={PhotoPaula} style={{ width: 60, height: 60, borderRadius: 60 + 60 / 2 }} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ marginLeft: 12, color: colors.neutralDarker, fontSize: 14, fontWeight: '600' }}>Paula Silveira</Text>
                <Text style={{ color: colors.neutralDark, fontSize: 12, fontWeight: '400', marginLeft: 12 }}>Uberlândia, MG</Text>
              </View>
            </View>
            <View style={{ marginTop: 26 }}>
              <Text style={{ fontWeight: '600', fontSize: 14, color: colors.neutralDarker, marginBottom: 4 }}>Façam o passeio de barco para Anavilhanas</Text>
              <Text style={{ fontSize: 12, fontWeight: '400', color: colors.neutralDark }}>Gentee, só façam esse passeio!! Nunca vi uma viagem igual a essa na minha vida.
                O barco passa em várias comunidades que ficam no Rio Negro. Pudemos participar de atividades de marcenaria em Araçari,
                fiz um banquinho de madeira lindo que trouxe comigo! Foi demais
              </Text>

              <View style={{flex:3, marginTop: 16, marginBottom: 16 }}>
                <Image source={DiarioPaula} resizeMode='cover' style={{ width: '100%', height: 296, borderRadius: 20 }} />
              </View>
            </View>

            <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>15/10/2021</Text>
              <BoxIcon width="18.57" height="18.57" />
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: colors.neutralMediumLight, width: '100%', marginBottom: 24, marginTop: 16 }}></View>
          </View>

          <View style={{ flex: 2, marginBottom: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={PhotoJoao} style={{ width: 60, height: 60, borderRadius: 60 + 60 / 2 }} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ marginLeft: 12, color: colors.neutralDarker, fontSize: 14, fontWeight: '600' }}>João Carlos Silva</Text>
                <Text style={{ color: colors.neutralDark, fontSize: 12, fontWeight: '400', marginLeft: 12 }}>Porto Alegre, RS</Text>
              </View>
            </View>
            <View style={{ marginTop: 26 }}>
              <Text style={{ fontWeight: '600', fontSize: 14, color: colors.neutralDarker, marginBottom: 4 }}>Superou todas as expectativas!</Text>
              <Text style={{ fontSize: 12, fontWeight: '400', color: colors.neutralDark }}>Foi a primeira vez que fiz uma viagem com o conceito
                de base comunitária. Fui com um grupo de amigos para a comunidade do Mato Serrado no Ceará e
                foi muito boa a experiência, muito melhor do que eu imaginava. Acho que fazer viagem de turismo tradicional
                até vai ficar sem graça daqui pra frente! Kkkkkkk
              </Text>
              <View style={{flex:3, marginTop: 16, marginBottom: 16 }}>
                <Image source={DiarioJoao} resizeMode='cover' style={{ width: '100%', height: 296, borderRadius: 20 }} />
              </View>
            </View>
            <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>15/10/2021</Text>
              <BoxIcon width="18.57" height="18.57" />
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: colors.neutralMediumLight, width: '100%', marginBottom: 24, marginTop: 16 }}></View>
          </View>

        </View>
      </ScrollView>
    </ScreenView>
  );
}
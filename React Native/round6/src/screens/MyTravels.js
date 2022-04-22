import React from 'react';
import { colors } from '../styles/colors';
import { StyleSheet, View, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import ArrowBackButton from '../assets/SVG/ArrowBackButton.svg';
import Background from '../assets/SVG/Background';
import CampingIcon from '../assets/SVG/CampingIcon.svg';
import BoatIcon from '../assets/SVG/BoatIcon.svg';
import WhatsappIconViagens from '../assets/SVG/WhatsappIconViagens.svg';

export function MyTravels(){
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  function handleGoWhatsapp(){
    Linking.openURL(`https://api.whatsapp.com/send?phone=5585997549596&text=Ol%C3%A1!%20Recentemente%20fiz%20uma%20viagem%20e%20gostaria%20de%20falar%20sobre.`);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.styleHeader}>
          <Text style={styles.textHeader}>Minhas viagens</Text>
        </View>

        <View style={{position: 'absolute', width: '100%', zIndex: 2}}>
          <TouchableOpacity onPress={handleGoBack} style={styles.botaoVoltar}>
            <ArrowBackButton style={{ width: 24, height: 24}}/>
          </TouchableOpacity>
        </View>

        <View style={{position: 'absolute', width: '100%', height: 240, backgroundColor: colors.primaryDefault}}>
          <View style={{opacity: 0.05}}>
            <Background style={{width: '100%', height: 240/6, }}/>
            <Background style={{width: '100%', height: 240/6, }}/>
            <Background style={{width: '100%', height: 240/6, }}/>
            <Background style={{width: '100%', height: 240/6, }}/>
            <Background style={{width: '100%', height: 240/6, }}/>
            <Background style={{width: '100%', height: 240/6, }}/>
          </View>
        </View>

        
        <View style={styles.dados}>

          <View style={styles.card}>
            <View style={styles.tituloCard}>
              <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 16.64 }}>
                <CampingIcon style={{width:"16.71", height:"16.71"}}/>
              </View>
              <Text style={{fontSize: 14, fontWeight: '600', color: colors.neutralDarker}}>Mãos na argila!</Text>
            </View>

            <View style={{width: '100%', paddingRight: 13, paddingLeft: 55, marginTop: 10}}>
              <Text style={{fontSize: 14, fontWeight: '400', color: colors.neutralDark}}>
                Passeio de 4 dias e 3 noites na comunidade de artesanato cearense Mato Serrado
              </Text>
              <View style={{paddingTop: 4}}>
                <Text style={{fontSize: 14, fontWeight: '400', color: colors.neutralDark}}>Data: 21/06/22 a 23/06/22</Text>
              </View>
            </View>

            <View style={{width: '100%', paddingLeft: 55, marginTop: 16, marginBottom: 18}}>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={{fontSize: 14, fontWeight: '600', color: colors.secondaryDefault}}>Ver detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.tituloCard}>
              <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 16.64 }}>
                <BoatIcon style={{width:"16.71", height:"16.71"}}/>
              </View>
              <Text style={{fontSize: 14, fontWeight: '600', color: colors.neutralDarker}}>Sobre as águas</Text>
            </View>

            <View style={{width: '100%', paddingRight: 13, paddingLeft: 55, marginTop: 10}}>
              <Text style={{fontSize: 14, fontWeight: '400', color: colors.neutralDark}}>
                Passeio de 4 dias e 3 noites no Barco Hotel nas ilhas de Anavilhanas
              </Text>
              <View style={{paddingTop: 4}}>
                <Text style={{fontSize: 14, fontWeight: '400', color: colors.neutralDark}}>Data: 15/10/21 a 19/10/21</Text>
              </View>
            </View>

            <View style={{width: '100%', paddingLeft: 55, marginTop: 16, marginBottom: 18}}>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={{fontSize: 14, fontWeight: '600', color: colors.secondaryDefault}}>Ver detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{width: '100%', paddingTop: 106, paddingBottom: 90, justifyContent: 'flex-end'}}>
            <View style={{ alignItems: 'flex-start'}}>
              <Text style={{fontSize: 14, fontWeight: '400', color: colors.neutralDark}}>Está com alguma dúvida?</Text>

              <TouchableOpacity activeOpacity={0.6} onPress={handleGoWhatsapp}>
                <View style={{paddingTop: 4, flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 14, fontWeight: '600', color: colors.secondaryDefault, paddingRight: 4}}>Entre em contato</Text>
                  <WhatsappIconViagens style={{width:"12", height:"12"}}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    alignItems: 'center', 
    backgroundColor: colors.primaryDefault
	},
  styleHeader: {
    paddingTop: 49, 
    paddingBottom: 52,
  },
  textHeader: {
    color: 'white', 
    fontSize: 24,
    fontWeight: '600',
    zIndex: 2
  },
  dados: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    borderRadius: 30,
    backgroundColor: colors.neutralLighter,
    paddingHorizontal: 32,
    paddingTop: 8
  },
  botaoVoltar:{
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 48, 
    height: 48, 
    marginLeft: 15, 
    marginTop: 40
  },
  card: {
    marginTop: 32,
    alignItems: 'center', 
    width: '100%', 
    borderRadius: 10,
    backgroundColor: colors.neutralLight
  },
  tituloCard: {
    flexDirection: 'row', 
    width: '100%', 
    marginTop: 16, 
    paddingLeft: 21.64,
  }
})
import React, { useState, useEffect } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, StatusBar, ScrollView, FlatList } from 'react-native';

import api from '../services/api';
import { buscaTours } from '../services/requisicoes/tours';

import PersonIcon from '../../src/assets/PersonIcon.png';

import ScreenView from '../components/ScreenView';
import { useNavigation } from '@react-navigation/native';
import Banner from '../components/Banner';
import BackImage from '../../src/assets/backgroundImage.png'
import Header from '../components/Header';
import { colors } from '../styles/colors';
import CardPackages from '../components/CardPackages';


export function Home() {

  const navigation = useNavigation();
  const [tours, setTours] = useState([]);

  async function busca() {
    const resultado = await buscaTours()
    console.log(resultado);
    if (resultado) {
      setTours(resultado)
    }
    else {
      alert('Ops')
    }
  }


  useEffect(() => {
    busca();
  }
    , [])




  return (
    <ScrollView>
      <ScreenView>
        <StatusBar backgroundColor="#FFF" barStyle='dark-content' />
        <Header isInside={true} icon={PersonIcon} />
        <View style={styles.AreaBanner}>
          <Banner image={BackImage} title="Turismo comunitário" />
        </View>
        <Text style={styles.titleAreaPackages}>Pacotes de turismo</Text>
        <View style={{ flexDirection: 'row' }}>
          <FlatList
            horizontal={true}
            data={tours}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <CardPackages title={item.communityName} subtitle="Moita Redonda" altura={200} />
                </ScrollView>
              </View>

            )}
            keyExtractor={item => item.communityName}

          />
        </View>
        <Text style={[styles.titleAreaPackages, { marginTop: 40, marginBottom: 20 }]}>Comunidades parceiras</Text>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <FlatList
            horizontal={true}
            data={tours}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <CardPackages title={item.communityName} subtitle="Moita Redonda" altura={180} />
                </ScrollView>
              </View>

            )}
            keyExtractor={item => item.communityName}

          />
        </View>
      </ScreenView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  AreaBanner: {
    marginTop: 32,
    marginBottom: 40,
  },
  titleAreaPackages: {
    fontSize: 20,
    color: colors.neutralDarker,
    fontWeight: '600',
    marginBottom: 20,
  },
  scroll: {
    backgroundColor: '#1dd',
    // flexDirection: 'row',
  }
})
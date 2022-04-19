import React, { useState, useEffect } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, StatusBar, ScrollView, FlatList } from 'react-native';

import api from '../services/api';
import { buscaTours } from '../services/requisicoes/tours';
import { buscaCommunities } from '../services/requisicoes/communities';

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
  const [communities, setCommunities] = useState([]);

  async function busca() {
    const resultado = await buscaTours()
    console.log(resultado);
    if (resultado) {
      setTours(resultado)
    }
    else {
      alert('Ops pacotes')
    }
  }


  useEffect(() => {
    busca();
  }
    , [])


  async function buscaComunidades() {
    const resultado = await buscaCommunities()
    console.log(`AQUI AS COMUNIDADES${resultado}`)
    if (resultado) {
      setCommunities(resultado)
    }
    else {
      alert('Ops comunidades')
    }
  }

  useEffect(() => {
    buscaComunidades();
  }, [])

  function handlePacote(item){
		navigation.navigate("TravelPackageScreen", { item });
	}

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
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row' }}>
                <CardPackages onPress={() => handlePacote(item)} title={item.tourName} subtitle={item.communityName} altura={200} imgBack={item.photo1} />
              </View>

            )}
            keyExtractor={item => item.communityName}

          />
        </View>
        <Text style={[styles.titleAreaPackages, { marginTop: 40, marginBottom: 20 }]}>Comunidades parceiras</Text>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <FlatList
            horizontal={true}
            data={communities}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row' }}>
                <CardPackages title={item.communityName} altura={180} imgBack={item.photo1} />
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
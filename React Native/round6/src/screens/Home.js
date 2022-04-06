import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, StatusBar, ScrollView } from 'react-native';

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

  return (
    <ScreenView>
      <StatusBar backgroundColor="#FFF" barStyle='dark-content' />
      <Header isInside={true} icon={PersonIcon} />
      <View style={styles.AreaBanner}>
        <Banner image={BackImage} title="Turismo comunitário" />
      </View>
      <Text style={styles.titleAreaPackages}>Pacotes de Turismo</Text>
      <View style={{ flexDirection: 'row'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CardPackages title="Mãos na argila!" subtitle="Moita Redonda" />
          <CardPackages title="Mãos na argila!" subtitle="Moita Redonda" />
          <CardPackages title="Mãos na argila!" subtitle="Moita Redonda" />
          <CardPackages title="Mãos na argila!" subtitle="Moita Redonda" />
          <CardPackages title="Mãos na argila!" subtitle="Moita Redonda" />
        </ScrollView>
      </View>
    </ScreenView>
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
import React from 'react';
import { colors } from '../styles/colors';
import { View, Text } from 'react-native';

export function MyTravels(){
  return (
    <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.indicativeSuccess}}>
      <Text style={{color: 'white', fontSize: 22}}>Tela de Minhas viagens</Text>
    </View>
  );
}
import React from 'react';
import { StatusBar, View, Text, Button } from 'react-native';

import ScreenView from '../components/ScreenView';
import ButtonLarge from '../components/ButtonLarge';
import ButtonSmall from '../components/ButtonSmall';
import ButtonSwitch from '../components/ButtonSwitch';
import FloatButton from '../components/FloatButton';
import InputArea from '../components/InputArea';
import Tag from '../components/Tag';
import { colors } from '../styles/colors';
import { useNavigation } from '@react-navigation/native';


export function Home() {

  const navigation = useNavigation();

  return (
    <ScreenView>
      <ButtonLarge titulo='Ir pra Login' backColor={colors.primaryDefault} onPress={() => navigation.navigate('Login')}/>
      <Button title='Navegar' onPress={() => navigation.navigate('Login')}/>
      <ButtonLarge titulo='Botão' backColor={colors.secondaryDefault} />
      <ButtonLarge titulo='Botão' backColor={colors.primaryDark} />
      <ButtonSmall titulo='Botão Menor' backColor={colors.primaryDefault} />
      <FloatButton titulo='+' backColor={colors.primaryDefault} />
      <InputArea titulo='Place Holder' corBorda={colors.primaryDark} />
      <Tag texto='Tag aqui' backColor={colors.primaryDark} />
      <ButtonSwitch falseColor={colors.primaryDefault} trueColor={colors.primaryDefault} enabledColor={colors.neutralLighter} disabledColor={colors.neutralLighter} />
    </ScreenView>
  );
}
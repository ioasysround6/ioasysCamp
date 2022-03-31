import React from 'react';
import { View, Text } from 'react-native';

import ButtonLarge from '../components/ButtonLarge';
import ButtonSmall from '../components/ButtonSmall';
import ButtonSwitch from '../components/ButtonSwitch';
import FloatButton from '../components/FloatButton';
import InputArea from '../components/InputArea';
import Tag from '../components/Tag';
import { colors } from '../styles/colors';

export function Home(){
  return (
    <View style={{flex:1, paddingTop: 30, backgroundColor: colors.neutralDarke}}>
      <ButtonLarge titulo='Botão' backColor={colors.primaryDefault}/>
      <ButtonLarge titulo='Botão' backColor={colors.secondaryDefault}/>
      <ButtonLarge titulo='Botão' backColor={colors.primaryDark}/>
      <ButtonSmall titulo='Botão Menor' backColor={colors.primaryDefault}/>
      <FloatButton titulo='+' backColor={colors.primaryDefault}/>
      <InputArea titulo='Place Holder' corBorda={colors.primaryDark}/>
      <Tag texto='Tag aqui' backColor={colors.primaryDark}/>
      <ButtonSwitch falseColor={colors.primaryDefault} trueColor={colors.primaryDefault} enabledColor={colors.neutralLighter} disabledColor={colors.neutralLighter}/>
    </View>
  );
}
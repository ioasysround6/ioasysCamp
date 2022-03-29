import React from 'react';
import { View, Text } from 'react-native';

import ButtonLarge from './src/components/ButtonLarge';
import ButtonSmall from './src/components/ButtonSmall';
import ButtonSwitch from './src/components/ButtonSwitch';
import FloatButton from './src/components/FloatButton';
import InputArea from './src/components/InputArea';
import Tag from './src/components/Tag';
import { colors } from './src/styles/colors';

export default function round6() {
 return (
   <View style={{backgroundColor: '#131313', flex:1}}>
      <ButtonLarge titulo='Botão' backColor={colors.primaryDefault}/>
      <ButtonLarge titulo='Botão' backColor={colors.secondaryDefault}/>
      <ButtonLarge titulo='Botão' backColor={colors.primaryDark}/>
      <ButtonSmall titulo='Botão Menor' backColor={colors.primaryDefault}/>
      <FloatButton titulo='+' backColor={colors.primaryDefault}/>
      <FloatButton titulo='+' backColor={colors.neutralLighter}/>
      <InputArea titulo='Place Holder' corBorda={colors.primaryDark}/>
      <Tag texto='Tag aqui' backColor={colors.primaryDark}/>
      <ButtonSwitch/>
   </View>
  );
}
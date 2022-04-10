import React, {useState} from 'react';
import { colors } from '../styles/colors';
import { useNavigation } from '@react-navigation/core';

import ArrowBackButtonDarker from '../assets/SVG/ArrowBackButtonDarker.svg';

import { KeyboardAvoidingView, StatusBar, StyleSheet, View, Text, TouchableHighlight, TextInput} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

export function Checkout(){
  const [isFocused, setIsFocused] = useState({
    nome: false,
    sobrenome: false,
    dataDeNascimento: false,
    email: false,
    cpf: false,
    
  });

  const handleInputFocus = (textinput) => {
    setIsFocused({
      [textinput]: true
    })
  }
  const handleInputBlur = (textinput) => {
    setIsFocused({
      [textinput]: false
    })
  }

  const navigation = useNavigation();

	function handleGoBack(){
		navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={colors.neutralLighter}
      />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={'#D1D2D166'}
        onPress={handleGoBack} 
        style={styles.backButton}
      >
        <ArrowBackButtonDarker style={{width: 24, height: 24}}/>
      </TouchableHighlight>

      <View style={styles.header}>
        <Text style={styles.headerText}>Checkout</Text>
      </View>

      <KeyboardAvoidingView style={{width: '100%',}} behavior={'padding'} enabled >
        <ScrollView>
            
            <View style={styles.dadosViajante}>
              <View style={styles.headerViajante}>
                <Text style={styles.textoHeaderViajante}>Viajante 1</Text>
              </View>

              <View style={styles.viajanteDados}>
                <Text style={styles.dadosCabecalho}>Nome</Text>
                <View>
                  <TextInput
                    style={isFocused.nome ? [styles.dadosInput, {borderColor: colors.primaryLight}] : styles.dadosInput }
                    placeholder="Maria Fernanda"
                    placeholderTextColor={colors.neutralMediumDark}
                    autoCapitalize='words'
                    onFocus={() => handleInputFocus('nome')}
                    onBlur={() => handleInputBlur('nome')}
                    ></TextInput>
                </View>
              </View>

              <View style={styles.viajanteDados}>
                <Text style={styles.dadosCabecalho}>Sobrenome</Text>
                <View>
                  <TextInput
                    style={isFocused.sobrenome ? [styles.dadosInput, {borderColor: colors.primaryLight}] : styles.dadosInput }
                    placeholder="Sales Souza"
                    placeholderTextColor={colors.neutralMediumDark}
                    autoCapitalize='words'
                    onFocus={() => handleInputFocus('sobrenome')}
                    onBlur={() => handleInputBlur('sobrenome')}
                    ></TextInput>
                </View>
              </View>

              <View style={styles.viajanteDados}>
                <Text style={styles.dadosCabecalho}>Data de Nascimento</Text>
                <View>
                  <TextInput
                    style={isFocused.dataDeNascimento ? [styles.dadosInput, {borderColor: colors.primaryLight}] : styles.dadosInput }
                    placeholder="01/01/1999"
                    placeholderTextColor={colors.neutralMediumDark}
                    autoCapitalize='words'
                    onFocus={() => handleInputFocus('dataDeNascimento')}
                    onBlur={() => handleInputBlur('dataDeNascimento')}
                    ></TextInput>
                </View>
              </View>

              <View style={styles.viajanteDados}>
                <Text style={styles.dadosCabecalho}>E-mail</Text>
                <View>
                  <TextInput
                    style={isFocused.email ? [styles.dadosInput, {borderColor: colors.primaryLight}] : styles.dadosInput }
                    placeholder="mariafernanda@gmail.com"
                    placeholderTextColor={colors.neutralMediumDark}
                    autoCapitalize='words'
                    onFocus={() => handleInputFocus('email')}
                    onBlur={() => handleInputBlur('email')}
                    ></TextInput>
                </View>
              </View>

              <View style={styles.viajanteDados}>
                <Text style={styles.dadosCabecalho}>CPF</Text>
                <View>
                  <TextInput
                    style={isFocused.cpf ? [styles.dadosInput, {borderColor: colors.primaryLight}] : styles.dadosInput }
                    placeholder="111.111.111-11"
                    placeholderTextColor={colors.neutralMediumDark}
                    autoCapitalize='words'
                    onFocus={() => handleInputFocus('cpf')}
                    onBlur={() => handleInputBlur('cpf')}
                    ></TextInput>
                </View>
              </View>

            </View>
            <View style={styles.separacaoViajante}></View>
        </ScrollView>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
	container: {
    flex: 1, 
    alignItems: 'flex-start', 
    backgroundColor: colors.neutralLighter,
	},
  backButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36,
    marginLeft: 15,
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  header: {
    width: '100%',
    marginTop: 46,
    alignItems: 'center',
  },
  headerText: {
    color: colors.neutralDarker,
    fontSize: 24,
  },
  dadosViajante: {
    paddingTop: 40,
    width: '100%',
    alignItems: 'flex-start',
    paddingRight: 32,
    paddingLeft: 32,
  },
  headerViajante: {
    paddingBottom: 8,
  },
  textoHeaderViajante: {
    color: colors.neutralDarker,
    fontSize: 18,
  },
  viajanteDados: {
    width: '100%',
    marginTop: 16,
  },
  dadosCabecalho: {
    color: colors.neutralDarker,
    fontSize: 12,
  },
  dadosInput: {
    borderRadius: 10,
    borderWidth: 1.6,
    marginTop: 8,
    paddingHorizontal: 12,
    height: 51,
    width: '100%',
    color: colors.neutralDark,

    borderColor: colors.neutralMediumDark,
    fontSize: 14,
  },
  separacaoViajante: {
    marginTop: 48,
    height: 1,
    marginHorizontal: 24,
    backgroundColor: colors.neutralMediumLight,
  }
})
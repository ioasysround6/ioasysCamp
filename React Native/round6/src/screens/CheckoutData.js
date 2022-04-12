import React, {useState, useEffect} from 'react';
import { colors } from '../styles/colors';
import { useNavigation } from '@react-navigation/core';

import { KeyboardAvoidingView, StyleSheet, View, Text, TextInput} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import ButtonLarge from '../components/ButtonLarge';

export function CheckoutData(){
  const [isFocused, setIsFocused] = useState(false);

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

	function handlePayScreen(){
		navigation.navigate("2. Pagamento")
  }

  return (
    <View style={{flex: 1}}>

    <KeyboardAvoidingView 
    style={{flex: 1, backgroundColor: colors.neutralLighter,}} 
    behavior={'padding'} 
    enabled
    >
      <ScrollView>
        <View style={styles.container}>
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
                  keyboardType={'numeric'}
                  placeholder="01/01/1999"
                  placeholderTextColor={colors.neutralMediumDark}
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
                  keyboardType={'email-address'}
                  placeholder="mariafernanda@gmail.com"
                  placeholderTextColor={colors.neutralMediumDark}
                  autoCapitalize='none'
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
                  keyboardType={'number-pad'}
                  placeholder="111.111.111-11"
                  placeholderTextColor={colors.neutralMediumDark}
                  onFocus={() => handleInputFocus('cpf')}
                  onBlur={() => handleInputBlur('cpf')}
                  ></TextInput>
              </View>
            </View>

          </View>
          <View style={styles.separacaoViajante}></View>

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
                  keyboardType={'numeric'}
                  placeholder="01/01/1999"
                  placeholderTextColor={colors.neutralMediumDark}
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
                  keyboardType={'email-address'}
                  placeholder="mariafernanda@gmail.com"
                  placeholderTextColor={colors.neutralMediumDark}
                  autoCapitalize='none'
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
                  keyboardType={'number-pad'}
                  placeholder="111.111.111-11"
                  placeholderTextColor={colors.neutralMediumDark}
                  onFocus={() => handleInputFocus('cpf')}
                  onBlur={() => handleInputBlur('cpf')}
                  ></TextInput>
              </View>
            </View>

          </View>
          <View style={styles.separacaoViajante}></View>

          </View>
      </ScrollView>
    </KeyboardAvoidingView>

    <View style={styles.button}>
      <ButtonLarge
        underlayColor={colors.secondaryDark}
        titulo='Ir para forma de pagamento'
        backColor={
          colors.secondaryDefault 
        }
        onPress={handlePayScreen}
      />
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
	container: {
    flex: 1, 
    justifyContent: 'flex-start',
    backgroundColor: colors.neutralLighter,
	},
  dadosViajante: {
    width: '100%',
    alignItems: 'flex-start',
    paddingRight: 32,
    paddingLeft: 32,
    paddingTop: 40,
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
    marginBottom: 10,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 100,
    paddingTop: 8,
    paddingHorizontal: 32,
    backgroundColor: colors.neutralLighter,
  }
})
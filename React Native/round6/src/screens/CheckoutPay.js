import React, {useState, useEffect} from 'react';
import { colors } from '../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { Shadow } from 'react-native-shadow-2';

import { KeyboardAvoidingView, Dimensions, StatusBar, StyleSheet, View, Text, TextInput} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import ButtonLarge from '../components/ButtonLarge';

var width = Dimensions.get('window').width;

export function CheckoutPay(){
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

  return(
    <View style={{flex: 1}}>

    <KeyboardAvoidingView 
    style={{flex: 1, backgroundColor: colors.neutralLighter,}} 
    behavior={'padding'} 
    enabled
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.pagamento}>
            
            <View style={styles.cartaoDados}>
              <Text style={styles.dadosCabecalho}>Número do cartão</Text>
              <View>
                <TextInput
                  style={isFocused.numeroDoCartao ? [styles.dadosInput, {borderColor: colors.primaryLight}] : styles.dadosInput }
                  placeholder="0000 0000 0000 0000"
                  keyboardType={'numeric'}
                  placeholderTextColor={colors.neutralMediumDark}
                  onFocus={() => handleInputFocus('numeroDoCartao')}
                  onBlur={() => handleInputBlur('numeroDoCartao')}
                  ></TextInput>
              </View>
            </View>

            <View style={styles.cartaoDados}>
              <Text style={styles.dadosCabecalho}>Nome impresso no cartão</Text>
              <View>
                <TextInput
                  style={isFocused.nomeImpressoNoCartao ? [styles.dadosInput, {borderColor: colors.primaryLight}] : styles.dadosInput }
                  placeholder="Maria F Sales Souza"
                  placeholderTextColor={colors.neutralMediumDark}
                  autoCapitalize='words'
                  onFocus={() => handleInputFocus('nomeImpressoNoCartao')}
                  onBlur={() => handleInputBlur('nomeImpressoNoCartao')}
                  ></TextInput>
              </View>
            </View>

            <View style={styles.boxCodigoeValidade}>
              <View style={styles.cartaoCodigo}>
                <Text style={styles.dadosCabecalho}>Código</Text>
                <View>
                  <TextInput
                    style={isFocused.codigoCartao ? [styles.dadosInput, {borderColor: colors.primaryLight}] : styles.dadosInput }
                    placeholder="111"
                    placeholderTextColor={colors.neutralMediumDark}
                    keyboardType={'numeric'}
                    onFocus={() => handleInputFocus('codigoCartao')}
                    onBlur={() => handleInputBlur('codigoCartao')}
                    ></TextInput>
                </View>
              </View>

              <View style={styles.cartaoValidade}>
                <Text style={styles.dadosCabecalho}>Validade</Text>
                <View>
                  <TextInput
                    style={isFocused.codigoCartao ? [styles.dadosInput, {borderColor: colors.primaryLight}] : styles.dadosInput }
                    placeholder="01/26"
                    placeholderTextColor={colors.neutralMediumDark}
                    keyboardType={'numeric'}
                    onFocus={() => handleInputFocus('codigoCartao')}
                    onBlur={() => handleInputBlur('codigoCartao')}
                    ></TextInput>
                </View>
              </View>
            </View>

            

            

            

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

    <View>
      <View style={styles.button}>
        <ButtonLarge
          underlayColor={colors.primaryDark}
          titulo='Ir para forma de pagamento'
          backColor={
            colors.primaryDefault 
          }
          onPress={handlePayScreen}
        />
      </View>   
    </View>

    <View style={styles.stackTotalPagar}>
      <Shadow 
        distance={20} 
        startColor={'#252A2733'}
        offset={[0, 2]}
        viewStyle={{width: width, height: '100%', backgroundColor: colors.neutralLighter, borderTopLeftRadius: 30, borderTopRightRadius: 30}}
      >
        <View style={styles.boxTotalPagar}>

          <View style={styles.boxTextTotal}>
            <Text style={styles.textTotalPagar}> Total a pagar</Text>
          </View>

          <View style={styles.boxPreco}>
            <Text style={styles.precoTotal}>R$ 600,00</Text>
            <Text style={styles.precoParcelamento}>Em até 3x sem juros</Text>
            <Text style={styles.precoParcelamento}>no cartão de crédito</Text>
          </View>
          
        </View>
      </Shadow>
    </View>

    

    </View>
  );
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: colors.neutralLighter,
    justifyContent: 'flex-start'
	},
  pagamento: {
    flex: 1,
    width: '100%',
    paddingRight: 32,
    paddingLeft: 32,
    paddingTop: 40,
  },
  cartaoDados: {
    width: '100%',
    marginTop: 16,
  },
  boxCodigoeValidade: {
    flexDirection: 'row',
  },
  cartaoCodigo: {
    width: '50%',
    paddingRight: 8,
    marginTop: 16,
  },
  cartaoValidade: {
    width: '50%',
    paddingLeft: 8,
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
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 100,
    paddingTop: 8,
    paddingHorizontal: 32,
    backgroundColor: colors.neutralLighter,
  },
  stackTotalPagar: {
    width: width,
    height: 120,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.neutralLighter,
  },
  boxTotalPagar: {
    flex: 1,
    marginHorizontal: 32,
    marginBottom: 25,
    marginTop: 34,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxTextTotal: {
    justifyContent: 'flex-start',
  },
  textTotalPagar: {
    fontSize: 20,
    color: colors.neutralDarker,
  },
  boxPreco: {
    flex: 1,
    alignItems: 'flex-end',
  },
  precoTotal: {
    fontSize: 20,
    color: colors.neutralDarker,
  },
  precoParcelamento: {
    fontSize: 12,
    color: colors.neutralDark,
  }
})

import React, {useState} from 'react';
import { colors } from '../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { Shadow } from 'react-native-shadow-2';
import DropDownPicker from 'react-native-dropdown-picker';

import { KeyboardAvoidingView, Dimensions, StyleSheet, View, Text, TextInput, Modal, TouchableOpacity, Linking } from 'react-native';

import CloseIcon from '../assets/SVG/CloseIcon';
import CampingIcon from '../assets/SVG/CampingIcon';
import CardIcon from '../assets/SVG/CardIcon';
import WhatsappIcon from '../assets/SVG/WhatsappIcon';

import { ScrollView } from 'react-native-gesture-handler';
import { Radio } from '../components/Radio';
import ButtonLarge from '../components/ButtonLarge';

var width = Dimensions.get('window').width;

export function CheckoutPay(){
  const [modalResumeVisible, setModalResumeVisible] = useState(false);
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);

  const [isFocused, setIsFocused] = useState(false);
  const [selected, setSelected] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'À vista', value: 'aVista'},
    {label: '2x sem juros', value: '2xSemJuros'},
    {label: '3x sem juros', value: '3xSemJuros'},
    {label: '4x sem juros', value: '4xSemJuros'},
    {label: '5x sem juros', value: '5xSemJuros'},
    {label: '6x sem juros', value: '6xSemJuros'},
    {label: '7x sem juros', value: '7xSemJuros'},
    {label: '8x sem juros', value: '8xSemJuros'},
    {label: '9x sem juros', value: '9xSemJuros'},
    {label: '10x sem juros', value: '10xSemJuros'},
    {label: '11x sem juros', value: '11xSemJuros'},
    {label: '12x sem juros', value: '12xSemJuros'},
  ]);

  const navigation = useNavigation();

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

  function handleCompraEfetuada(){
    setModalSuccessVisible(!modalSuccessVisible);
		navigation.navigate("Home");
	}

  function handleModalResume() {
    setModalResumeVisible(!modalResumeVisible);
    setModalSuccessVisible(true);
  }

  function handleGoWhatsapp(){
    Linking.openURL(`https://api.whatsapp.com/send?phone=5585997549596&text=Ol%C3%A1!%20Realizei%20minha%20compra%2C%20obrigado!`);
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

            <View style={{marginLeft: -22}}>
              <Radio
                selected={selected}
                options={['Boleto', 'Pix', 'Cartão de crédito']} 
                horizontal={true} 
                onChangeSelect={(index) => setSelected(index)}
              />
            </View>

            <View style={styles.cartaoDados}>
              <Text style={styles.dadosCabecalho}>Parcelar a compra</Text>
                <View>
                  <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection="BOTTOM"
                    listItemLabelStyle={{
                      color: colors.neutralDark,
                    }}
                    selectedItemContainerStyle={{
                      backgroundColor: colors.neutralLight,
                    }}
                    selectedItemLabelStyle={{
                      color: colors.primaryDefault,
                    }}
                    dropDownContainerStyle={{
                      backgroundColor: colors.neutralLighter,
                    }}
                    style={isFocused.dropdown ? [styles.dropdownButton, {borderColor: colors.primaryLight}] : styles.dropdownButton }
                    placeholder= 'Selecione o número de parcelas'
                    placeholderStyle={{
                      color: colors.neutralMediumDark,
                    }}
                    onOpen={() => handleInputFocus('dropdown')}
                    onClose={() => handleInputBlur('dropdown')}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                  />
                </View>
            </View>
            
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
          underlayColor={colors.secondaryDark}
          titulo='Finalizar compra'
          backColor={
            colors.secondaryDefault 
          }
          onPress={() => setModalResumeVisible(true)}
        />
      </View>

      <View>
        <Modal
          statusBarTranslucent
          animationType="fade"
          transparent={true}
          visible={modalResumeVisible}
          onRequestClose={() => {
            setModalResumeVisible(!modalResumeVisible);
          }}
        >
          <View style={styles.centeredViewResume}>
            <View style={styles.modalViewResume}>
              <View style={styles.headerResume}>
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={styles.botaoFechar}
                  onPress={() => setModalResumeVisible(!modalResumeVisible)}>
                  <CloseIcon width={30} height={30}/>
                </TouchableOpacity>
                <View style={{marginTop: -12, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                  <Text style={styles.modalTextResume}>Resumo da Compra</Text>
                </View>
              </View>

              <View style={{width: '100%', paddingHorizontal: 32}}>
                <View style={styles.DadosPacote}>
                  <CampingIcon width={16} height={16}/>
                  <Text style={styles.textoHeaderDadosPacote}>
                    Pacote Mãos na Argila!
                  </Text>
                </View>

                <View style={styles.descricaoDados}>
                  <View style={{width: 1, marginTop: 5,marginBottom: -9, backgroundColor: colors.neutralMediumLight}}></View>
                  <Text style={styles.descricaoDadosTexto}>Pacote de turismo para a comunidade Mato Serrado na cidade de Crato no Ceará na data de 21/06 a 23/06</Text>
                </View>

                <View style={styles.DadosPacote}>
                  <CardIcon width={16} height={16}/>
                  <Text style={styles.textoHeaderDadosPacote}>
                    Forma de pagamento
                  </Text>
                </View>

                <View style={[styles.descricaoDados, {paddingBottom: 57}]}>
                  <View style={{width: 1, marginTop: 5,marginBottom: -2, backgroundColor: colors.neutralMediumLight}}></View>
                  <View style={{width: '100%',}}>
                    <Text style={styles.descricaoDadosTexto}>Cartão de crédito com final de 4444, parcelado em 3x sem juros</Text>
                    <View style={{paddingLeft: 22, alignItems: 'flex-start', justifyContent: 'center'}}>
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => setModalResumeVisible(!modalResumeVisible)}
                      >
                        <Text style={styles.descricaoAlterarForma}>Alterar forma de pagamento</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={{width: '100%', height: 1, backgroundColor: colors.neutralMediumLight}}></View>

                <View style={styles.totalAPagar}>
                  <Text style={styles.totalAPagarTitulo}>Total a pagar</Text>
                  <View style={{alignItems: 'flex-end'}}>
                    <Text style={styles.totalAPagarTitulo}>R$ 600,00</Text>
                    <Text style={styles.totalAPagarParcela}>3x sem juros</Text>
                  </View>
                </View>
              </View>

              <View style={{width: '100%', paddingHorizontal: 32, marginBottom: 32}}>
                <ButtonLarge
                  underlayColor={colors.secondaryDark}
                  titulo='Confirmar compra'
                  backColor={
                    colors.secondaryDefault 
                  }
                  onPress={handleModalResume}
                />
              </View>

            </View>
          </View>
          
        </Modal>
      </View>

      <View>
        <Modal
          statusBarTranslucent
          animationType="fade"
          transparent={true}
          visible={modalSuccessVisible}
          onRequestClose={() => {
            setModalSuccessVisible(!modalSuccessVisible);
          }}
        >
          <View style={styles.centeredViewSuccess}>
            <View style={styles.modalViewSuccess}>

              <View style={styles.headerResume}>
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={styles.botaoFechar}
                  onPress={handleCompraEfetuada}>
                  <CloseIcon width={30} height={30}/>
                </TouchableOpacity>
                <View style={{marginTop: 22, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                  <Text style={styles.modalTextResume}>Sua compra foi efetuada {'\n'} com sucesso!</Text>
                </View>
              </View>

              <View style={styles.modalDeCompraEfetuada}>
                <Text style={styles.modalDeCompraTexto}>
                  Fique de olho no seu e-mail, vamos enviar as informações sobre sua viagem por lá! Qualquer dúvida fique a vontade para chamar a gente pelo Whats App:
                </Text>
              </View>

              <View style={{width: '100%', paddingHorizontal: 22, marginBottom: 52, alignItems: 'flex-start', justifyContent: 'center'}}>
                <View style={{ zIndex: 2, position: 'absolute', marginLeft: 44 }}>
                  <WhatsappIcon width={18} height={18}/>
                </View>
                <ButtonLarge
                  underlayColor={colors.primaryDark}
                  titulo='Redirecionar para WhatsApp'
                  backColor={
                    colors.primaryDefault
                  }
                  onPress={handleGoWhatsapp}
                />
              </View>
            </View>
          </View>
        </Modal>
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
    paddingTop: 10,
  },
  cartaoDados: {
    width: '100%',
    marginTop: 12,
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
    fontWeight: '400'
  },
  dropdownButton: {
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
  centeredViewResume: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#rgba(209, 210, 209, 0.75)',
    paddingHorizontal: 32,
  },
  modalViewResume: {
    backgroundColor: colors.neutralLighter,
    width: '100%',
    // marginTop: 120,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  headerResume: {
    marginTop: 8,
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 27,
  },
  botaoFechar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  textStyleResume: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTextResume: {
    textAlign: "center",
    fontSize: 20,
    color: colors.neutralDarker,
    fontWeight: '600'
  },
  DadosPacote: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingBottom: 12,
    paddingTop: 25,
  },
  textoHeaderDadosPacote: {
    paddingLeft: 14,
    fontSize: 14,
    fontWeight: '600',
    color: colors.neutralDarker,
  },
  descricaoDados: {
    flexDirection: 'row',
    marginLeft: 8
  },
  descricaoDadosTexto: {
    marginLeft: 23,
    textAlign: 'left',
    color: colors.neutralDark,
    fontSize: 14,
    fontWeight: '400'
  },
  descricaoAlterarForma: {
    marginTop: 16,
    fontSize: 12,
    color: colors.primaryDefault,
    fontWeight: '600'
  },
  totalAPagar: {
    paddingTop: 16, 
    paddingBottom: 32,
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    justifyContent: 'space-between',
  },
  totalAPagarTitulo: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },
  totalAPagarParcela: {
    fontSize: 12,
    color: colors.neutralDark
  },
  centeredViewSuccess: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#rgba(209, 210, 209, 0.75)',
    paddingHorizontal: 32,
  },
  modalViewSuccess: {
    backgroundColor: colors.neutralLighter,
    width: '100%',
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalDeCompraEfetuada: {
    width: '100%',
    paddingHorizontal: 25,
    marginTop: -15,
    marginBottom: 30,
  },
  modalDeCompraTexto: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.neutralDark,
    fontWeight: '400'
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
    fontWeight: '600'
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
    fontWeight: '400',
    color: colors.neutralDark,
  }
})
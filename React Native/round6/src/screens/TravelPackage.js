import React, {useState, useEffect} from 'react';
import { Shadow } from 'react-native-shadow-2';
import { useNavigation, useRoute } from '@react-navigation/core';

import { colors } from '../styles/colors';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import ButtonLarge from '../components/ButtonLarge';
import { ImageSlider } from '../components/ImageSlider';

import ArrowBackButton from '../assets/ArrowBackButton.svg';
import CampingIcon from '../assets/CampingIcon.svg';
import MountainIcon from '../assets/MountainIcon.svg';
import CalendarIcon from '../assets/CalendarIcon.svg';
import MapIcon from '../assets/MapIcon.svg';

import { Dimensions, StatusBar, StyleSheet, View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';

var width = Dimensions.get('window').width;

export function TravelPackage(){
  const [counter, setCounter] = useState(0);
  const [activeButton, setActiveButton] = useState(false);
  const [igual, setIgual] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  const numeroDePessoas = item.vacancies;

	function handleGoBack(){
		navigation.goBack();
	}

  function handleCheckoutPage(){
		navigation.navigate("CheckoutData");
	}

  function somar() {
    if (counter < numeroDePessoas){
      setCounter(counter + 1)
    }
  }

  function subtrair() {
    if (counter > 0){
      setCounter(counter - 1)
    }
  }

  useEffect(() => {
    if (counter > 0) {
      setActiveButton(!!setActiveButton)
    } else {
      setActiveButton(!setActiveButton)
    }
  }, [counter])

  useEffect(() => {
    if (counter == numeroDePessoas) {
      setIgual(!!setIgual)
    } else {
      setIgual(!setIgual)
    }
  }, [counter])

  return (      
    <ScrollView>
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={'transparent'}
      />
      
      <View>
        <RectButton 
          activeOpacity={0.6} 
          onPress={handleGoBack} 
          style={styles.backButton}
        >
          <ArrowBackButton style={{ width: 24, height: 24}}/>
        </RectButton>

        <Shadow 
          distance={20} 
          startColor={'#252A2733'} 
          offset={[0, 2]}>
            <ImageSlider imagesUrl={[item.photo1, item.photo2, item.photo3]}/>
        </Shadow>
      </View>

      <View style={styles.descricao}>
        <View style={styles.cabecalho}>
          <Text style={styles.pacoteDescricao}>{item.tourName}</Text>
          <Text style={styles.pacotePreco}>R$ {item.price}</Text>
        </View>

        <View style={styles.informacao}>
          <Text style={styles.informacaoTexto}>{item.description}</Text>
        </View>

        <View style={styles.vagas}>
          <Text style={styles.vagasTexto}>{numeroDePessoas} vagas disponíveis</Text>
        </View>

        <View style={styles.quantidade}>
          <Text style={styles.quantidadeTexto}>Quantidade de Pessoas</Text>
          <View style={styles.contador}>
            <TouchableOpacity
              activeOpacity={0.3} 
              style={styles.botaoSomaeSubtracao}
              onPress={subtrair}
              disabled={!activeButton}
            >
              <View style={[activeButton 
                ? styles.circuloSomaeSubtracao 
                : styles.circuloSomaeSubtracaoDesabilitado]}>
                <Text 
                  style={[
                    styles.iconeSomaeSubtracao, 
                    activeButton ? {color: colors.neutralDarker} 
                    : {color: colors.neutralMediumLight}]}
                >-</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.numeroContagem}>{counter}</Text>
            <TouchableOpacity
              activeOpacity={0.3} 
              style={styles.botaoSomaeSubtracao}
              onPress={somar}
              disabled={igual}
            >
              <View style={[!igual 
                ? styles.circuloSomaeSubtracao 
                : styles.circuloSomaeSubtracaoDesabilitado]}>
                <Text
                  style={[
                    styles.iconeSomaeSubtracao, 
                    !igual ? {color: colors.neutralDarker} 
                    : {color: colors.neutralMediumLight}]}
                >+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonAtivo}>
          <ButtonLarge
            underlayColor={colors.primaryDark}
            botaodesativado={!activeButton}
            titulo='Comprar pacote'
            backColor={activeButton 
              ? colors.primaryDefault 
              : colors.neutralMediumLight}
            onPress={handleCheckoutPage}
          />
        </View>

        <View style={styles.informacoesPacote}>
          <View style={styles.informacoesPacoteHeader}>
            <CampingIcon width="18.57" height="18.57"/>
            <View style={styles.informacoesTitulo}>
              <Text style={styles.informacoesTexto}>Hospedagem</Text>
            </View>
          </View>
          <View style={styles.informacoesPacoteDescricao}>
            <View style={styles.barralateral}></View>
            <Text style={styles.informacoesPacoteTexto}>
              {item.accommodation}
            </Text>
          </View>
        </View>

        <View style={styles.informacoesPacote}>
          <View style={styles.informacoesPacoteHeader}>
            <MountainIcon width="18.57" height="18.57"/>
            <View style={styles.informacoesTitulo}>
              <Text style={styles.informacoesTexto}>Atividades</Text>
            </View>
          </View>
          <View style={styles.informacoesPacoteDescricao}>
            <View style={styles.barralateral}></View>
            <Text style={styles.informacoesPacoteTexto}>
              {item.activities}
            </Text>
          </View>
        </View>

        <View style={styles.informacoesPacote}>
          <View style={styles.informacoesPacoteHeader}>
            <CalendarIcon width="18.57" height="18.57"/>
            <View style={styles.informacoesTitulo}>
              <Text style={styles.informacoesTexto}>Datas</Text>
            </View>
          </View>
          <View style={styles.informacoesPacoteDescricao}>
            <View style={styles.barralateral}></View>
            <Text style={styles.informacoesPacoteTexto}>
              {item.travelDate}
            </Text>
          </View>
        </View>

        <View style={styles.informacoesPacote}>
          <View style={styles.informacoesPacoteHeader}>
            <MapIcon width="18.57" height="18.57"/>
            <View style={styles.informacoesTitulo}>
              <Text style={styles.informacoesTexto}>Dicas de viagem</Text>
            </View>
          </View>
          <View style={styles.informacoesPacoteDescricao}>
            <View style={[styles.barralateral, {marginBottom: 10}]}></View>
            <Text style={[styles.informacoesPacoteTexto, {paddingBottom: 32}]}>
              {item.hint}
            </Text>
          </View>
        </View>

      </View>
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
	container: {
    flex: 1, 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
    backgroundColor: colors.neutralLighter,
	},
  backButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    marginTop: 36,
    marginLeft: 14,
    width: 48,
    height: 48,
  },
  descricao: {
    flex: 1,
    width: '100%',
    paddingTop: 40,
    paddingHorizontal: 32,
  },
  cabecalho: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pacoteDescricao: {
    color: colors.neutralDarker,
    fontSize: 24,
  },
  pacotePreco: {
    color: colors.neutralDarker,
    fontSize: 20,
  },
  informacao: {
    paddingTop: 25,
  },
  informacaoTexto: {
    color: colors.neutralDark,
    fontSize: 12,
    textAlign: 'justify'
  },
  vagas: {
    paddingTop: 12,
  },
  vagasTexto: {
    color: colors.neutralDark,
    fontSize: 12,
  },
  quantidade: {
    flexDirection: 'row',
    paddingTop: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantidadeTexto: {
    fontSize: 12,
    color: colors.neutralDark,
  },
  contador: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoSomaeSubtracao: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
  },
  circuloSomaeSubtracao: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
    borderColor: colors.neutralDarker,
    borderWidth: 1,
  },
  circuloSomaeSubtracaoDesabilitado: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
    borderColor: colors.neutralMediumLight,
    borderWidth: 1,
  },
  iconeSomaeSubtracao: {
    fontSize: 12,
  },
  numeroContagem: {
    fontSize: 14,
    color: colors.neutralDark,
  },
  buttonAtivo: {
    paddingTop: 23,
    paddingBottom: 12,
  },
  informacoesPacote: {
    paddingTop: 40,
  },
  informacoesPacoteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  informacoesTitulo: {
    paddingLeft: 12.71,
  },
  informacoesTexto: {
    fontSize: 18,
    color: colors.neutralDarker,
  },
  informacoesPacoteDescricao: {
    width: '100%',
    paddingTop: 12,
    flexDirection: 'row',
  },
  barralateral: {
    backgroundColor: colors.neutralMediumLight,
    marginLeft: 8.29,
    marginRight: 23,
    width: 2,
    marginTop: 4.71,
    marginBottom: -22,
  },
  informacoesPacoteTexto: {
    marginRight: 32,
    fontSize: 12,
    color: colors.neutralDark,
  }
})
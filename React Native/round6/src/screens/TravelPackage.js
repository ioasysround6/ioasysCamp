import React, {useState, useEffect} from 'react';
import { Shadow } from 'react-native-shadow-2';
import { useNavigation } from '@react-navigation/core';

import { colors } from '../styles/colors';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import ButtonLarge from '../components/ButtonLarge';
import { ImageSlider } from '../components/ImageSlider';

import ArrowBackButton from '../assets/ArrowBackButton.svg';
import CampingIcon from '../assets/CampingIcon.svg';
import MountainIcon from '../assets/MountainIcon.svg';
import CalendarIcon from '../assets/CalendarIcon.svg';
import MapIcon from '../assets/MapIcon.svg';

import { Dimensions, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

var width = Dimensions.get('window').width;

export function TravelPackage(){
  const [counter, setCounter] = useState(0);
  const [activeButton, setActiveButton] = useState(false);

  const navigation = useNavigation();

	function handleGoBack(){
		navigation.goBack();
	}

  function somar() {
    if (counter < 5){
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

  return (      
    <ScrollView>
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={'#54595666'}
        // translucent
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
            <ImageSlider imagesUrl={['https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'https://images.unsplash.com/photo-1611843467160-25afb8df1074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1516959543587-4cc499d9514b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80']}/>
        </Shadow>
      </View>

      <View style={styles.descricao}>
        <View style={styles.cabecalho}>
          <Text style={styles.pacoteDescricao}>Pacote 1</Text>
          <Text style={styles.pacotePreco}>R$ 600,00</Text>
        </View>

        <View style={styles.informacao}>
          <Text style={styles.informacaoTexto}>
            TEste Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
          </Text>
        </View>

        <View style={styles.vagas}>
          <Text style={styles.vagasTexto}> 5 vagas disponíveis</Text>
        </View>

        <View style={styles.quantidade}>
          <Text style={styles.quantidadeTexto}>Quantidade de Pessoas</Text>
          <View style={styles.contador}>
            <TouchableOpacity
              activeOpacity={0.6} 
              style={styles.botaoSomaeSubtracao}
              onPress={subtrair}
            >
              <View style={styles.circuloSomaeSubtracao}>
                <Text style={styles.iconeSomaeSubtracao}>-</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.numeroContagem}>{counter}</Text>
            <TouchableOpacity 
              activeOpacity={0.6} 
              style={styles.botaoSomaeSubtracao}
              onPress={somar}
            >
              <View style={styles.circuloSomaeSubtracao}>
                <Text style={styles.iconeSomaeSubtracao}>+</Text>
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
            onPress={() => {}}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    zIndex: 1,
    marginTop: 36,
    marginLeft: 14,
    width: 48,
    height: 48,
  },
  // imagem: {
  //   borderBottomLeftRadius: 20,
  //   borderBottomRightRadius: 20,
  //   width: width,
  //   height: 420,
  // },
  descricao: {
    width: width,
    paddingTop: 40,
    paddingLeft: 32,
    paddingRight: 32,
  },
  cabecalho: { 
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
    backgroundColor: colors.primaryDefault
  },
  iconeSomaeSubtracao: {
    fontSize: 14,
    color: colors.neutralLighter,
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
    fontSize: 12,
    color: colors.neutralDark,
  }
})
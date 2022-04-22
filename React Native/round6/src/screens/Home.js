import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, FlatList, Image, Dimensions, TouchableHighlight } from 'react-native';
import LottieView from 'lottie-react-native';

import api from '../services/api';
import { buscaTours } from '../services/requisicoes/tours';
import { buscaCommunities } from '../services/requisicoes/communities';

import { SwiperFlatList } from 'react-native-swiper-flatlist';

import PersonIcon from '../../src/assets/PersonIcon.png';

import ScreenView from '../components/ScreenView';
import { useNavigation } from '@react-navigation/native';
import Banner from '../components/Banner';
import BackImage from '../../src/assets/backgroundImage.png'
import Header from '../components/Header';
import { colors } from '../styles/colors';
import CardPackages from '../components/CardPackages';
import ModalCommunities from '../components/ModalCommunities';

import loadingAnimation from '../assets/loadingAnimation.json';

import LateralHome from '../assets/SVG/LateralHome.svg';
import ButtonSmall from '../components/ButtonSmall';

var width = Dimensions.get('window').width;

export function Home() {

  const navigation = useNavigation();
  const [tours, setTours] = useState([]);
  const [communities, setCommunities] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [comunidadeSelected, setComunidadeSelected] = useState();

  const [titulo, setTitulo] = useState('');

  const [loading, setLoading] = useState(true);

  async function busca() {
    const resultado = await buscaTours()
    console.log(resultado);
    if (resultado) {
      setTours(resultado)
    }
    else {
      alert('Ops pacotes')
    }

    setLoading(false);
  }


  useEffect(() => {
    busca();
  }
    , [])

  async function buscaComunidades() {
    const resultado = await buscaCommunities()
    console.log(`AQUI AS COMUNIDADES${resultado}`)
    if (resultado) {
      setCommunities(resultado)
    }
    else {
      alert('Ops comunidades')
    }
  }

  useEffect(() => {
    buscaComunidades();
  }, [])

  function handleClickCommunities(item) {
    setModalVisible(true);
    setComunidadeSelected(item);
  }

  function handleExitCommunities() {
    setModalVisible(false);
  }

  function handlePacote(item){
      navigation.navigate("TravelPackageScreen", { item });
    }

  function handleGoAccount(){
    navigation.navigate("MyAccount")
  }

  function handleGoCommunityTourism(){
    navigation.navigate('CommunityTourism')
}

  const imagesUrl=['https://i.imgur.com/YenN23l.png', 'https://i.imgur.com/q1HkLAG.png', 'https://i.imgur.com/5tRVLuD.png']

  if(loading)
  return (
    <View style={styles.boxLoading}>
      <View style={styles.loadingView}>
        <View style={styles.lottieViewStyle}>
          <LottieView
            source={loadingAnimation}
            autoPlay
            loop
            style={{flex: 1, backgroundColor: 'transparent',}}
          />

        </View>
        <View style={{justifyContent: 'flex-end', alignItems:'center'}}>
          <Text style={styles.textCarregando}>Carregando{'\n'}página</Text>
        </View>
      </View>
    </View>
  )

  return (
    <View style={{backgroundColor: colors.neutralLighter}}>
      <ScrollView>
        <ScreenView>
          <StatusBar 
            backgroundColor={colors.neutralLighter} 
            barStyle='dark-content'/>
          <Header isInside={true} icon={PersonIcon} onPress={handleGoAccount} />

            <View style={{position: 'absolute', opacity: 0.05}}>
              <View style={{zIndex: 5,marginLeft: -200, marginTop: 17, transform: [{rotate: "90deg"}] }}>
                <LateralHome  width={350} height={40}/>
              </View>
              <View style={{zIndex: 4, marginLeft: -205, marginTop: 229, transform: [{rotate: "90deg"}] }}>
                <LateralHome  width={350} height={40}/>
              </View>
              <View style={{zIndex: 3,marginLeft: -210, marginTop: 229,  transform: [{rotate: "90deg"}] }}>
                <LateralHome  width={350} height={40}/>
              </View>
              <View style={{zIndex: 2,marginLeft: -215, marginTop: 229,  transform: [{rotate: "90deg"}] }}>
                <LateralHome  width={350} height={40}/>
              </View>
            </View>

          <View style={styles.AreaBanner}>
            {/* <Banner image={BackImage} title="Turismo comunitário" /> */}

            <SwiperFlatList
              autoplay
              autoplayDelay={4}
              autoplayLoop
              autoplayLoopKeepAnimation
              disableGesture
              index={0}
              paginationStyleItemActive={styles.dotActive}
              paginationStyleItemInactive={styles.dotInactive}
              showPagination
              data={imagesUrl}
              renderItem={({ item }) => (
                <View style={styles.imagewrapper}>
                  <Image 
                    style={styles.image} 
                    source={{uri: item}}
                  />
                </View>
              )}
            />

            <View style={styles.boxTurismo}>
              <View style={{alignItems: 'center', marginTop: 97}}>
                <Text style={styles.textoTurismo}>Turismo comunitário</Text>
                <Text style={styles.textoAtividade}>essa atividade pode ajudar a {'\n'}erradicar a pobreza</Text>
              </View>

              <View style={{width: '100%', height: 48, marginTop: 40}}>
                <TouchableHighlight 
                  style={styles.botaoSaberBox}
                  activeOpacity={0.6}
                  underlayColor={colors.primaryDark}
                  onPress={handleGoCommunityTourism}
                  >
                  <Text style={styles.textoBotao}>Saber como</Text>
                </TouchableHighlight>
              </View>

            </View>
          </View>

          <Text style={styles.titleAreaPackages}>Pacotes de turismo</Text>
          <View style={{ flexDirection: 'row', height: 200 }}>
            <FlatList
              horizontal={true}
              data={tours}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={{ flexDirection: 'row' }}>
                  <CardPackages onPress={() => handlePacote(item)} title={item.tourName} subtitle={item.communityName} altura={200} imgBack={item.photo1} />
                </View>

              )}
              keyExtractor={item => item.id}

            />
          </View>
          <Text style={[styles.titleAreaPackages, { marginTop: 40, marginBottom: 20 }]}>Comunidades parceiras</Text>
          <View style={{ flexDirection: 'row', marginBottom: 20, height: 180 }}>
            <FlatList
              horizontal={true}
              data={communities}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={{ flexDirection: 'row' }}>
                  <CardPackages title={item.communityName} altura={180} imgBack={item.photo1} onPress={() => handleClickCommunities(item)} />
                </View>

              )}
              keyExtractor={item => item.id}

            />
          </View>
        </ScreenView>
      </ScrollView>
      <ModalCommunities
        visible={modalVisible}
        // visibleAction={setModalVisible}
        exitModal={handleExitCommunities}
        titulo={comunidadeSelected?.communityName}
        subtitle={comunidadeSelected?.description}
        imageCommunities={comunidadeSelected?.photo2}
        textLocation={comunidadeSelected?.localization}
        textActivities={comunidadeSelected?.mainActivities}
        textCuriosities={comunidadeSelected?.curiosities}
      />
  </View> 
  );
}

const styles = StyleSheet.create({
  AreaBanner: {
    marginTop: 22,
    marginBottom: 40,
  },
  titleAreaPackages: {
    fontSize: 20,
    color: colors.neutralDarker,
    fontWeight: '600',
    marginBottom: 20,
  },
  scroll: {
    backgroundColor: '#1dd',
    // flexDirection: 'row',
  },

  dotActive: {
    width: 10,
    height: 4,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: colors.neutralLighter
  },
  dotInactive: {
    width: 6,
    height: 4,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: '#rgba(252, 252, 252, 0.4)',
    borderColor: '#rgba(252, 252, 252, 0.4)',
    borderWidth: 1
  },
  imagewrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 20,
    width: width - 64,
    height: 300,
  },
  boxTurismo: {
    position: 'absolute',
    width: '100%', 
    height: '100%'
  },
  textoTurismo: {
    fontSize: 24, 
    fontWeight: '600', 
    color: colors.neutralLight
  },
  textoAtividade: {
    textAlign: 'center', 
    fontSize: 14, 
    fontWeight: '400', 
    color: colors.neutralLighter
  },
  botaoSaberBox: {
    flex: 1, 
    marginHorizontal: 78, 
    backgroundColor: colors.primaryDefault, 
    borderRadius: 12, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  textoBotao: {
    fontSize: 14, 
    fontWeight: '600', 
    color: colors.neutralLighter
  },

  boxLoading: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: colors.neutralLight
  },
  loadingView: {
    height: 200, 
    width: 200, 
    alignItems: 'center', 
    justifyContent: 'flex-start'
  },
  lottieViewStyle: {
    height: '100%', 
    width: '100%', 
    alignItems: 'center'
  },
  textCarregando: {
    position: 'absolute' , 
    textAlign: 'center', 
    fontSize: 14, 
    fontWeight: '600', 
    paddingBottom: 34, 
  }
})
import React, { useState } from 'react';
import { colors } from '../styles/colors';

import { StyleSheet, View, Text, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';

import MapaComunidades from '../assets/SVG/MapaComunidades.svg';
import PinIcon from '../assets/SVG/PinIcon.svg';
import CloseIcon from '../assets/SVG/CloseIcon';
import Triangle from '../assets/SVG/Triangle';
import Plant from '../assets/SVG/Plant';
import Box from '../assets/SVG/Box';

export function Communities(){
  const [modalAracari, setModalAracari] = useState(false);
  const [modalMatoSerrado, setModalMatoSerrado] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: 'purple'}}>

      <View style={styles.header}>
        <View style={styles.boxTextoHeader}>
          <Text style={styles.textoComunidades}>Conheça as comunidades</Text>
          <Text style={styles.textoComunidadesSubtitulo}>Selecione abaixo uma comunidade parceira</Text>
        </View>
      </View>

      <View style={styles.boxMapa}>
        <View style={{backgroundColor: 'purple',}}>
          <MapaComunidades />

          <View style={{position: 'absolute'}}>
            <View style={styles.posPin01}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.botaoPinEstilo}
                onPress={() => setModalAracari(true)} 
              >
                <PinIcon width="36" height="36"/>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{position: 'absolute'}}>
            <View style={styles.posPin02}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.botaoPinEstilo}
                onPress={() => setModalMatoSerrado(true)} 
              >
                <PinIcon width="36" height="36"/>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>

      {/* Modal do Aracari */}
      <View>
        <View style={{position: 'absolute'}}>
        <View style={styles.centeredView}>
          <Modal
            statusBarTranslucent
            animationType="fade"
            transparent={true}
            visible={modalAracari}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalAracari(!modalAracari);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>

                <View style={styles.headerResume}>
                  <TouchableOpacity
                    activeOpacity={0.4}
                    style={styles.botaoFechar}
                    onPress={() => setModalAracari(!modalAracari)}>
                    <CloseIcon width={30} height={30}/>
                  </TouchableOpacity>
                    <View style={{marginTop: -12, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                      <Text style={styles.modalTextResume}>Araçari</Text>
                    </View>

                    <View style={{marginTop: 8, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                      <Text style={styles.modalTextResume2}>Uma comunidade bem pequena próxima a Boa Vista no Amazonas, pouco conhecida, mas com paisagens incríveis!</Text>
                    </View>
                  </View>

                  <ScrollView style={{width: '100%', paddingTop: 4}}>
                    <View style={{alignItems: 'center'}}>
                      <View style={{width: 200, height: 200, borderRadius: 20,}}>
                        <Image 
                          source={{ uri: 'https://i.imgur.com/fAhWUSa.png' }}
                          style={{ width: 200, height: 200, borderRadius: 20 }}
                        />
                      </View >
                    </View>

                    <View style={{marginHorizontal: 33, paddingTop: 32,}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Triangle width={14.86} height={14.86}/>
                        <Text style={{paddingLeft: 12.57, fontSize: 14, fontWeight: '600', color: colors.neutralDarker}}>Localização</Text>
                      </View>

                      <View style={{flexDirection: 'row', paddingTop: 16}}>
                        <View style={{backgroundColor: colors.neutralMediumLight, width: 2, marginLeft: 7, marginRight: 22, height: '75%'}} />
                        <View style={{width: '100%', paddingRight: 33}}>
                          <Text style={{fontSize: 14, fontWeight: '400', color: colors.neutralDark}}>A comunidade de Serra do Paraíso fica localizada na cidade de Jacobina no interior da Bahia a 5h de Salvador</Text>
                        </View>
                      </View>
                    </View>

                    <View style={{marginHorizontal: 33, paddingTop: 32,}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Plant width={14.86} height={14.86}/>
                        <Text style={{paddingLeft: 12.57, fontSize: 14, fontWeight: '600', color: colors.neutralDarker}}>Principais atividades</Text>
                      </View>

                      <View style={{flexDirection: 'row', paddingTop: 16}}>
                        <View style={{backgroundColor: colors.neutralMediumLight, width: 2, marginLeft: 7, marginRight: 22, height: '75%'}} />
                        <View style={{width: '100%', paddingRight: 33}}>
                          <Text style={{fontSize: 14, fontWeight: '400', color: colors.neutralDark}}>A comunidae de Araçari vive principalmente da pesca no Rio Negro e da produção de peças de artesanato de madeira que é extraído da própria região</Text>
                        </View>
                      </View>
                    </View>

                    <View style={{marginHorizontal: 33, paddingTop: 32, paddingBottom: 40}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Box width={14.86} height={14.86}/>
                        <Text style={{paddingLeft: 12.57, fontSize: 14, fontWeight: '600', color: colors.neutralDarker}}>Curiosidades</Text>
                      </View>

                      <View style={{flexDirection: 'row', paddingTop: 16}}>
                        <View style={{backgroundColor: colors.neutralMediumLight, width: 2, marginLeft: 7, marginRight: 22, height: '75%'}} />
                        <View style={{width: '100%', paddingRight: 33}}>
                          <Text style={{fontSize: 14, fontWeight: '400', color: colors.neutralDark}}>Um produto comercializado que garante a subsistência dos moradores locais são palitos de churrasco, que são produzidos também com recursos da região.{'\n'}
                          A comunidade recebe o nome em homenagem à ave Araçari típica da região</Text>
                        </View>
                      </View>
                    </View>

                  </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
        </View>
      </View>

      {/* Modal do Mato Serrado */}

      <View>
        <View style={{position: 'absolute'}}>
        <View style={styles.centeredView}>
          <Modal
            statusBarTranslucent
            animationType="fade"
            transparent={true}
            visible={modalMatoSerrado}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalMatoSerrado(!modalMatoSerrado);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>

                <View style={styles.headerResume}>
                  <TouchableOpacity
                    activeOpacity={0.4}
                    style={styles.botaoFechar}
                    onPress={() => setModalMatoSerrado(!modalMatoSerrado)}>
                    <CloseIcon width={30} height={30}/>
                  </TouchableOpacity>
                    <View style={{marginTop: -12, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                      <Text style={styles.modalTextResume}>Mato Serrado</Text>
                    </View>

                    <View style={{marginTop: 8, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                      <Text style={styles.modalTextResume2}>Uma comunidade bem pequena próxima a Boa Vista no Amazonas, pouco conhecida, mas com paisagens incríveis!</Text>
                    </View>
                  </View>

                  <ScrollView style={{width: '100%', paddingTop: 4}}>
                    <View style={{alignItems: 'center'}}>
                      <View style={{width: 200, height: 200, borderRadius: 20,}}>
                        <Image 
                          source={{ uri: 'https://i.imgur.com/fAhWUSa.png' }}
                          style={{ width: 200, height: 200, borderRadius: 20 }}
                        />
                      </View >
                    </View>

                    <View style={{marginHorizontal: 33, paddingTop: 32,}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Triangle width={14.86} height={14.86}/>
                        <Text style={{paddingLeft: 12.57, fontSize: 14, fontWeight: '600', color: colors.neutralDarker}}>Localização</Text>
                      </View>

                      <View style={{flexDirection: 'row', paddingTop: 16}}>
                        <View style={{backgroundColor: colors.neutralMediumLight, width: 2, marginLeft: 7, marginRight: 22, height: '75%'}} />
                        <View style={{width: '100%', paddingRight: 33}}>
                          <Text style={{fontSize: 14, fontWeight: '400', color: colors.neutralDark}}>A comunidade de Serra do Paraíso fica localizada na cidade de Jacobina no interior da Bahia a 5h de Salvador</Text>
                        </View>
                      </View>
                    </View>

                    <View style={{marginHorizontal: 33, paddingTop: 32,}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Plant width={14.86} height={14.86}/>
                        <Text style={{paddingLeft: 12.57, fontSize: 14, fontWeight: '600', color: colors.neutralDarker}}>Principais atividades</Text>
                      </View>

                      <View style={{flexDirection: 'row', paddingTop: 16}}>
                        <View style={{backgroundColor: colors.neutralMediumLight, width: 2, marginLeft: 7, marginRight: 22, height: '75%'}} />
                        <View style={{width: '100%', paddingRight: 33}}>
                          <Text style={{fontSize: 14, fontWeight: '400', color: colors.neutralDark}}>A comunidae de Araçari vive principalmente da pesca no Rio Negro e da produção de peças de artesanato de madeira que é extraído da própria região</Text>
                        </View>
                      </View>
                    </View>

                    <View style={{marginHorizontal: 33, paddingTop: 32, paddingBottom: 40}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Box width={14.86} height={14.86}/>
                        <Text style={{paddingLeft: 12.57, fontSize: 14, fontWeight: '600', color: colors.neutralDarker}}>Curiosidades</Text>
                      </View>

                      <View style={{flexDirection: 'row', paddingTop: 16}}>
                        <View style={{backgroundColor: colors.neutralMediumLight, width: 2, marginLeft: 7, marginRight: 22, height: '75%'}} />
                        <View style={{width: '100%', paddingRight: 33}}>
                          <Text style={{fontSize: 14, fontWeight: '400', color: colors.neutralDark}}>Um produto comercializado que garante a subsistência dos moradores locais são palitos de churrasco, que são produzidos também com recursos da região.{'\n'}
                          A comunidade recebe o nome em homenagem à ave Araçari típica da região</Text>
                        </View>
                      </View>
                    </View>
                    
                  </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
        </View>
      </View>




    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primaryDefault, 
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  boxTextoHeader: {
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 49, 
    marginBottom: 38
  },
  textoComunidades: {
    color: colors.neutralLighter, 
    fontSize: 24,
    fontWeight: '600'
  },
  textoComunidadesSubtitulo: {
    color: colors.neutralLighter,  
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center'
  },
  boxMapa: {
    flex: 1, 
    backgroundColor: 'red', 
    alignItems: 'center', 
    justifyContent: 'center', 
    zIndex: 1
  },
  posPin01: {
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 90, 
    marginLeft: 100
  },
  posPin02: {
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 95, 
    marginLeft: 350
  },
  botaoPinEstilo: {
    paddingHorizontal: 10, 
    paddingVertical: 10, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(209, 210, 209, 0.75)',
    paddingHorizontal: 32,
    paddingVertical: 120,
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.neutralLighter,
    borderRadius: 30,
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
    marginTop: 16,
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 28,
  },
  botaoFechar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  modalTextResume: {
    textAlign: "center",
    fontSize: 20,
    color: colors.neutralDarker,
    fontWeight: '600'
  },
  modalTextResume2: {
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 14,
    color: colors.neutralDark,
    fontWeight: '400'
  },
  
})
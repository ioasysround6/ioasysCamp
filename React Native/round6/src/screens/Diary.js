import React, { useState, useEffect } from 'react';
import { colors } from '../styles/colors';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import ScreenView from '../components/ScreenView';
import Header from '../components/Header';

import { buscaDiario } from '../services/requisicoes/diary';

import BoxIcon from '../assets/SVG/Box.svg';
import ButtonLarge from '../components/ButtonLarge';

export function Diary() {

  const [diario, setDiario] = useState();

  async function buscaDiarios() {
    const resultado = await buscaDiario()
    console.log(`AQUI OS DIARIOS${resultado}`)
    if (resultado) {
      setDiario(resultado)
    }
    else {
      alert('Ops diários')
    }
  }

  useEffect(() => {
    buscaDiarios();
  }, [])


  function handleClickNewPost() {
    alert('Ainda não é possível fazer uma publicação')
  }

  return (
    <ScreenView>
      <Header />
      <View style={styles.viewTitlePage}>
        <Text style={styles.textTitleContent}>
          Compartilhe com a gente um pouquinho da sua experiência em nossos pacotes de turismo aqui no nosso feed!
        </Text>
      </View>
      <View style={styles.viewButtonPost}>
        <ButtonLarge titulo="Fazer um post" backColor={colors.secondaryDefault} onPress={handleClickNewPost} />
      </View>
      <FlatList
        data={diario}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.containerStories}>
            <View style={styles.viewUser}>
              <Image source={{ uri: `${item.user.photo}` }} style={styles.userPhoto} />
              <View style={styles.viewTextNameUser}>
                <Text style={styles.nameUser}>{`${item.user.firstName} ${item.user.lastName}`}</Text>
              </View>
            </View>
            <View style={styles.viewDataPost}>
              <Text style={styles.textTitlePost}>{item.title}</Text>
              <Text style={styles.textTitleContent}>{item.content}</Text>
              {item.photo ? (
                <View style={styles.viewPhotoPost}>
                  <Image source={{ uri: `${item.photo}` }} resizeMode='cover' style={styles.imagePost} />
                </View>
              ) : (
                <></>
              )}
            </View>
            <View style={styles.viewComentPost}>
              <Text>{item.createdAt}</Text>
              <BoxIcon width="18.57" height="18.57" />
            </View>
            <View style={styles.line}></View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  viewTitlePage: {
    width: '100%',
    marginBottom: 32
  },
  textTitleContent: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.neutralDark
  },
  viewButtonPost: {
    marginBottom: 32
  },
  containerStories: {
    flex: 1
  },
  viewUser: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 60 + 60 / 2
  },
  viewTextNameUser: {
    flexDirection: 'column'
  },
  nameUser: {
    marginLeft: 12,
    color: colors.neutralDarker,
    fontSize: 14,
    fontWeight: '600'
  },
  viewDataPost: {
    marginTop: 26
  },
  textTitlePost: {
    fontWeight: '600',
    fontSize: 14, color: colors.neutralDarker,
    marginBottom: 4
  },
  viewPhotoPost: {
    flex: 3,
    marginTop: 16,
    marginBottom: 16
  },
  imagePost: {
    width: '100%',
    height: 296,
    borderRadius: 20
  },
  viewComentPost: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  line: {
    borderBottomWidth: 1,
    borderColor: colors.neutralMediumLight,
    width: '100%',
    marginBottom: 24,
    marginTop: 16
  }
})
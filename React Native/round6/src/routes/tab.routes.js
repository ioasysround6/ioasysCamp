import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Communities } from '../screens/Communities';
import { Diary } from '../screens/Diary';
import { MyTravels } from '../screens/MyTravels';

import HomeActiveIcon from '../assets/HomeActiveIcon.svg';
import HomeInactiveIcon from '../assets/HomeInactiveIcon.svg';
import CommunitiesActiveIcon from '../assets/CommunitiesActiveIcon.svg';
import CommunitiesInactiveIcon from '../assets/CommunitiesInactiveIcon.svg';
import DiaryActiveIcon from '../assets/DiaryActiveIcon.svg';
import DiaryInactiveIcon from '../assets/DiaryInactiveIcon.svg';
import MyTravelsActiveIcon from '../assets/MyTravelsActiveIcon.svg';
import MyTravelsInactiveIcon from '../assets/MyTravelsInactiveIcon.svg';

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes(){
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.neutralDarker,
        tabBarInactiveTintColor: colors.neutralMediumDark,
        tabBarLabelStyle: {
          fontSize: 10,
          paddingTop: 8,
        },
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 73,
          paddingTop: 15,
          paddingBottom: 15,
        }
      }}
    >
      <Screen 
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (({ focused }) =>
            focused ?
            <>
              <View style={styles.icone}>
                <View style={styles.posicaoCirculoHome}/>
              </View>

              <HomeActiveIcon/>
            </>

              : <HomeInactiveIcon/>
          )
        }}
      />
      <Screen 
        name="Comunidades"
        component={Communities}
        options={{
          tabBarIcon: (({ focused }) =>
            focused ?
            <>
              <View style={styles.icone}>
                <View style={styles.posicaoCirculoComunidades}/>
              </View>

              <CommunitiesActiveIcon/>
            </>

              : <CommunitiesInactiveIcon/>
          )
        }}
      />
      <Screen 
        name="Diário"
        component={Diary}
        options={{
          tabBarIcon: (({ focused }) =>
            focused ?
            <>
              <View style={styles.icone}>
                <View style={styles.posicaoCirculoDiario}/>
              </View>

              <DiaryActiveIcon/>
            </>

              : <DiaryInactiveIcon/>
          )
        }}
      />
      <Screen 
        name="Minhas viagens"
        component={MyTravels}
        options={{
          tabBarIcon: (({ focused }) =>
            focused ?
            <>
              <View style={styles.icone}>
                <View style={styles.posicaoCirculoMinhasViagens}/>
              </View>

              <MyTravelsActiveIcon/>
            </>

              : <MyTravelsInactiveIcon/>
          )
        }}
      />
    </Navigator>
  )
}

const styles = StyleSheet.create({
  icone:{
    position: 'absolute',
  },
  posicaoCirculoHome: {
    backgroundColor: colors.primaryDefault,
    marginTop: 16,
    marginLeft: 16,
    width: 16, 
    height: 16, 
    borderRadius: 8,
  },
  posicaoCirculoComunidades: {
    backgroundColor: colors.primaryDefault,
    marginBottom: 12,
    marginLeft: 20,
    width: 16, 
    height: 16, 
    borderRadius: 8,
  },
  posicaoCirculoDiario: {
    backgroundColor: colors.primaryDefault,
    marginBottom: 16,
    marginLeft: 18,
    width: 16, 
    height: 16, 
    borderRadius: 8,
  },
  posicaoCirculoMinhasViagens: {
    backgroundColor: colors.primaryDefault,
    marginTop: 12,
    marginLeft: 17,
    width: 16, 
    height: 16, 
    borderRadius: 8,
  },
})
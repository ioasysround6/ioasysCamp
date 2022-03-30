import React from 'react';
import { Platform } from 'react-native';
import { colors } from '../styles/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Communities } from '../screens/Communities';
import { Diary } from '../screens/Diary';
import { MyTravels } from '../screens/MyTravels';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes(){
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.neutralDarker,
        tabBarInactiveTintColor: colors.neutralMediumDark,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          height: 73,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          paddingBottom: 10
        }
      }}
    >
      <Screen 
        name="Home"
        component={Home}
        options={{
          // tabBarIcon: (({ size, color }))
        }}
      />
      <Screen 
        name="Comunidades"
        component={Communities}
      />
      <Screen 
        name="Diário"
        component={Diary}
      />
      <Screen 
        name="Minhas viagens"
        component={MyTravels}
      />
    </Navigator>
  )
}
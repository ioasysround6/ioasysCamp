import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { StatusBar, StyleSheet, View, Text,TouchableHighlight, Dimensions} from 'react-native';
import ArrowBackButton from '../assets/ArrowBackButton';
import Background from '../assets/SVG/Background';

import { CheckoutData } from '../screens/CheckoutData';
import { CheckoutPay } from '../screens/CheckoutPay';

var width = Dimensions.get('window').width;

const Tab = createMaterialTopTabNavigator();

export default function TopTabRoutes() {
  const navigation = useNavigation();

	function handleGoBack(){
		navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={'transparent'}
      />
      <View style={{paddingBottom: 52,}}>
        <View style={{position: 'absolute', width: width, height: 240, backgroundColor: colors.primaryDefault}}>
          <View style={{opacity: 0.05}}>
            <Background style={{width: '100%', height: 240/6, }}/>
            <Background style={{width: '100%', height: 240/6, }}/>
            <Background style={{width: '100%', height: 240/6, }}/>
            <Background style={{width: '100%', height: 240/6, }}/>
            <Background style={{width: '100%', height: 240/6, }}/>
            <Background style={{width: '100%', height: 240/6, }}/>
          </View>
        </View>

        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor={'#D1D2D166'}
          onPress={handleGoBack} 
          style={styles.backButton}
        >
          <ArrowBackButton style={{width: 24, height: 24}}/>
        </TouchableHighlight>

        <View style={styles.header}>
          <Text style={styles.headerText}>Checkout</Text>
        </View>

      </View>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor:colors.neutralDarker,
            tabBarInactiveTintColor: colors.neutralDark,
            tabBarIndicatorStyle: {
              marginHorizontal: 40,
              width: '50%',
              backgroundColor: colors.secondaryDefault,
              height: 2,
            },
            tabBarPressColor: colors.neutralMediumLight,
            tabBarScrollEnabled: true,
            tabBarLabelStyle: {
              width: '100%', 
              fontSize: 14,
              textTransform: 'capitalize',
              paddingTop: 25,
            },
            tabBarStyle: {
              shadowColor: 'transparent',
              alignItems: 'center',
              height: 65,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              backgroundColor: colors.neutralLighter
            },
          }}
        >
          <Tab.Screen
            name="1. Dados Pessoais" 
            component={CheckoutData}
          />
          <Tab.Screen 
            name="2. Pagamento" 
            component={CheckoutPay}
          />
        </Tab.Navigator>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 15,
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  header: {
    width: '100%',
    marginTop: 49,
    alignItems: 'center',
  },
  headerText: {
    color: colors.neutralLighter,
    fontSize: 24,
  },
})
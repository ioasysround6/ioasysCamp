import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabRoutes from './tab.routes';

import Login from '../screens/Login';
import Register from '../screens/Register';
import { TravelPackage } from '../screens/TravelPackage';
import { Checkout } from '../screens/Checkout';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown: false}}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen 
        name="LoginScreen" 
        component={Login}
      />
      <Stack.Screen 
        name="HomeScreen" 
        component={TabRoutes}
      />
      <Stack.Screen 
        name="TravelPackageScreen" 
        component={TravelPackage}
      />

      <Stack.Screen 
        name="Register" 
        component={Register}
      />

      <Stack.Screen 
        name="CheckoutScreen" 
        component={Checkout}
      />

    </Stack.Navigator>
  );
}
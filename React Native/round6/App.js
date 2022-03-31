import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabRoutes } from './src/routes/tab.routes'
import { View, StatusBar } from 'react-native';

export default function App() {
 return (
  <View style={{flex:1}}>
    <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  </View>
  );
}
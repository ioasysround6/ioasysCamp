import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ScreenView({children}) {
 return (
   <View style={styles.container}>{children}</View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor: '#132',
        marginLeft: 32,
        marginRight:32,
        // alignItems:'center'

    }
})
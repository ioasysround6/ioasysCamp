import React from "react";

import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {colors} from '../styles/colors';

const ButtonSmall = ({titulo, backColor, onPress}) =>{
    return(
    <TouchableOpacity style={[styles.botao, {backgroundColor:backColor}]} onPress={onPress}>
        <Text style={styles.tituloBotao}>{titulo}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao:{
        width: 186,
        height: 48,
        justifyContent:'center',
        alignItems: 'center',
        // backgroundColor: colors.primaryDefault,
        borderRadius:12,
    },
    tituloBotao:{
        fontSize: 16,
        color: '#FCFCFC'

    }
})

export default ButtonSmall;
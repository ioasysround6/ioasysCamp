import React from "react";

import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {colors} from '../styles/colors';

const ButtonLarge = ({titulo, backColor}) =>{
    return(
    <TouchableOpacity style={[styles.botao, {backgroundColor:backColor}]}>
        <Text style={styles.tituloBotao}>{titulo}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao:{
        width: '100%',
        height: 52,
        justifyContent:'center',
        alignItems: 'center',
        // backgroundColor: colors.primaryDefault,
        borderRadius:12,
    },
    tituloBotao:{
        fontSize: 14,
        color: '#FCFCFC'

    }
})

export default ButtonLarge;
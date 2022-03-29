import React from "react";

import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {colors} from '../styles/colors';

const FloatButton = ({titulo, backColor}) =>{
    return(
    <TouchableOpacity style={[styles.botao, {backgroundColor:backColor}]}>
        <Text style={styles.tituloBotao}>{titulo}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao:{
        width: 54,
        height: 54,
        justifyContent:'center',
        alignItems: 'center',
        // backgroundColor: colors.primaryDefault,
        borderRadius:15,
    },
    tituloBotao:{
        fontSize: 16,
        color: '#FCFCFC'

    }
})

export default FloatButton;
import React from "react";

import {TextInput, StyleSheet, Text} from 'react-native';
import {colors} from '../styles/colors';

const InputArea = ({titulo, corBorda}) =>{
    return(
        <TextInput
            style={[styles.input,{borderColor: corBorda}]}
            placeholder={titulo}
            
        />
    );
}

const styles = StyleSheet.create({
    input:{
        width: 296,
        height: 51,
        borderRadius:10,
        borderWidth:1,
    
    },
})

export default InputArea;
import React from "react";

import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../styles/colors';

const Tag = ({texto, backColor}) =>{
    return(
    <View style={[styles.tag, {backgroundColor:backColor}]}>
        <Text style={styles.textoTag}>{texto}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    tag:{
        width: 55,
        height: 22,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:10,
    },
    textoTag:{
        fontSize: 16,
        color: '#FCFCFC'

    }
})

export default Tag;
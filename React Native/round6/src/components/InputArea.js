import React,{useState} from "react";

import { TextInput, StyleSheet, Text } from 'react-native';
import { colors } from '../styles/colors';

const InputArea = ({ titulo, corBorda, placeholder, onChangeText }) => {

    const [borderColor, setBorderColor] = useState('#131313')
    const [borderWidth, setBorderWidth] = useState(1)

    function selectInput(){
        setBorderColor(colors.primaryDefault);
        setBorderWidth(2);

    }

    function unselectInput(){
        setBorderColor(colors.neutralDark);
        setBorderWidth(1);
    }

    return (
        <>
            <Text style={styles.textTitle}>{titulo}</Text>
            <TextInput
                style={[styles.input, { borderColor: borderColor, borderWidth: borderWidth }]}
                placeholder={placeholder}
                onChangeText={onChangeText} 
                onFocus={selectInput}
                onBlur={unselectInput}
            />
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 51,
        borderRadius: 10,
        borderWidth: 1,
        padding: 12

    },
    textTitle: {
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        color: colors.neutralDarker,
        marginBottom: 8,

    }
})

export default InputArea;
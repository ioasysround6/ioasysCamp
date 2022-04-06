import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

import ButtonSmall from './ButtonSmall';
import { colors } from '../styles/colors';
import BackImage from '../../src/assets/backgroundImage.png'

export default function Banner({ image, title, subtitle }) {
    return (
        <View style={styles.Banner}>
            <ImageBackground style={styles.image} source={image} resizeMode='cover'>
                <View style={{ alignItems: 'center', marginBottom: 50 }}>
                    <Text style={styles.title}>{title}</Text>

                    <Text style={styles.subtitle}>como essa atividade pode{"\n"}
                        ajudar a erradicar a pobreza</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ButtonSmall titulo="Saiba como é possível" backColor={colors.primaryDefault} />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    Banner: {
        width: '100%',
        height: 300,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.neutralLight,
        fontSize: 24,
        fontWeight: '600',
        marginTop: 80,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.neutralLight,
    },
    image: {
        backgroundColor: colors.primaryDark,
        width: '100%',
        height: 300,
    }
})
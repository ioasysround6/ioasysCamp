import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';

import ImageBack from '../../src/assets/backgroundImage.png';

export default function CardPackages({ title, subtitle, altura, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.card, { height: altura }]}>
                <ImageBackground style={styles.ImageBackground} source={ImageBack} resizeMode='cover'>
                    <View style={styles.viewTitleAndSubtitle}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 140,
        // height: 200,
        backgroundColor: '#131313',
        borderRadius: 20,
        marginRight: 16,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.neutralLighter
    },
    subtitle: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.neutralLighter
    },
    ImageBackground: {
        flex: 1,
        borderRadius: 20,
        justifyContent: 'flex-end'
    },
    viewTitleAndSubtitle: {
        paddingLeft: 12,
        paddingRight: 14,
        paddingBottom: 16
    }
})
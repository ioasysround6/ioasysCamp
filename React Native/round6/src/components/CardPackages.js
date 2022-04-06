import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';

export default function CardPackages({ title, subtitle }) {
    return (
        <TouchableOpacity>
            <View style={styles.card}>
                <ImageBackground>
                    <View style={{ alignItems: 'stretch' }}>
                        <View style={{ paddingLeft: 12, paddingRight: 14, paddingBottom: 16 }}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.subtitle}>{subtitle}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 140,
        height: 200,
        backgroundColor: '#131313',
        borderRadius: 20,
        marginRight: 16,
        justifyContent: 'flex-end'
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
    }
})
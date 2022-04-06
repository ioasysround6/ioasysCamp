import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import HomeActiveIcon from '../assets/HomeActiveIcon.svg';
import { colors } from '../styles/colors';

export default function Header({ TextButtonHeaderRight, icon }) {
    return (
        <View style={styles.viewHeader}>
            <Image source={icon} />
            {/* <>{icon}</> */}
            {/* <HomeActiveIcon/> */}
            <TouchableOpacity>
                <Text style={styles.textButtonHeader}>{TextButtonHeaderRight}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewHeader: {
        width: '100%',
        height: 50,
        // backgroundColor: '#ad5',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    textButtonHeader: {
        fontSize: 14,
        color: colors.neutralDark
    }
})


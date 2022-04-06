import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import HomeActiveIcon from '../assets/HomeActiveIcon.svg';
import { colors } from '../styles/colors';

export default function Header({ TextButtonHeaderRight, icon, isInside, }) {
    return (
        <View style={styles.viewHeader}>
            {isInside === true ? (
                <>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.textButtonHeader}>LOGOAQUI</Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={icon} />
                    </TouchableOpacity>
                </>
            ) :
                (
                    <>
                        <Image source={icon} />
                        <TouchableOpacity>
                            <Text style={styles.textButtonHeader}>{TextButtonHeaderRight}</Text>
                        </TouchableOpacity>
                    </>
                )}

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


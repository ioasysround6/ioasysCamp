import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/core';
import HomeActiveIcon from '../assets/HomeActiveIcon.svg';
import { colors } from '../styles/colors';

import LogoHome from '../assets/SVG/LogoHome.svg';

var width = Dimensions.get('window').width;

export default function Header({ TextButtonHeaderRight, icon, isInside, colorText }) {
    const navigation = useNavigation();

    function handleMoveOn() {
        navigation.navigate("HomeScreen");
    }

    function handleGoBack(){
        navigation.goBack();
    }

    return (
        <View style={styles.viewHeader}>
            {isInside === true ? (
                <>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{marginLeft: 32}}>
                            <LogoHome width={112} height={60.61} />
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Image source={icon} />
                    </TouchableOpacity>
                </>
            ) :
                (
                    <>
                        <TouchableOpacity onPress={handleGoBack}>
                            <Image source={icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleMoveOn} >
                            <Text style={[styles.textButtonHeader, { color: colorText }]}>{TextButtonHeaderRight}</Text>
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
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },
    textButtonHeader: {
        fontSize: 14,
        fontWeight: '600',
    }
})


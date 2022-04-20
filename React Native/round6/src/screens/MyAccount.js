import React from 'react';

import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import Header from '../components/Header';

import ScreenView from '../components/ScreenView';

import BackIcon from '../assets/back.png';
import PersonIcon from '../assets/SVG/PersonRounded.svg';
import WhatsappIconRounded from '../assets/SVG/WhatsappIconRounded.svg';
import { colors } from '../styles/colors';
import ButtonLarge from '../components/ButtonLarge';
import { useNavigation } from '@react-navigation/native';


export default function MyAccount() {

    const navigation = useNavigation();

    function LinkingWhatsapp() {
        Linking.openURL(`https://api.whatsapp.com/send?phone=556140040001&text=Ol%C3%A1%20Gostaria%20de%20saber%20mais!`)
    }

    function ExitUser() {
        navigation.navigate('LoginScreen')
    }


    return (
        <ScreenView>
            <Header icon={BackIcon} />
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.viewCardOption}>
                        <PersonIcon width="18.57" height="18.57" />
                        <Text style={styles.textInfomation}>Informações pessoais</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity onPress={LinkingWhatsapp}>
                    <View style={styles.viewCardOption}>
                        <WhatsappIconRounded width="18.57" height="18.57" fill="#131313" />
                        <Text style={styles.textInfomation}>Atendimento por WhatsApp</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.line}></View>
                <View style={styles.viewAreaButton}>
                    <ButtonLarge titulo="Sair da minha conta" backColor={colors.secondaryDefault} onPress={ExitUser} />
                </View>

            </View>
        </ScreenView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:45,
    },
    viewCardOption: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: colors.neutralMediumDark,
        marginTop: 20,
        marginBottom: 20
    },
    textInfomation: {
        color: '#000000',
        marginLeft: 16.71,
        fontWeight: '400'
    },
    viewAreaButton: {
        flex: 2,
        justifyContent: 'flex-end',
        marginBottom: 34
    }
})
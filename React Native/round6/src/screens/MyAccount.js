import React, { useState, useEffect } from 'react';

import { View, Text, TouchableOpacity, Linking, StyleSheet, FlatList, Button, Image } from 'react-native';
import Header from '../components/Header';

import AsyncStorage from '@react-native-async-storage/async-storage'

import ScreenView from '../components/ScreenView';

import BackIcon from '../assets/back.png';
import PersonIcon from '../assets/SVG/PersonRounded.svg';
import WhatsappIconRounded from '../assets/SVG/WhatsappIconRounded.svg';
import { colors } from '../styles/colors';
import ButtonLarge from '../components/ButtonLarge';
import { useNavigation } from '@react-navigation/native';

import { buscaDadosUsuario } from '../services/requisicoes/dataUser';

import PhotoFelipe from '../assets/PNG/UsuarioFelipe.png';


export default function MyAccount() {

    const [dataUsuario, setDataUsuario] = useState();
    const [tokenUser, setTokenUser] = useState('');

    // const image = { uri: `${dataUsuario?.photo}` };

    const navigation = useNavigation();


    function LinkingWhatsapp() {
        Linking.openURL(`https://api.whatsapp.com/send?phone=556140040001&text=Ol%C3%A1%20Gostaria%20de%20saber%20mais!`)
    }

    function ExitUser() {
        AsyncStorage.removeItem("TOKEN");
        navigation.navigate('LoginScreen')
    }


    async function searchTokenUser() {
        await AsyncStorage.getItem("TOKEN").then((token) => {
            setTokenUser(token);
            console.log(token);
        })
    }

    async function buscaDadosDoUsuario() {
        const resultado = await buscaDadosUsuario(tokenUser);
        console.log(`AQUI OS DADOS DO USUÁRIO${JSON.stringify(resultado)}`)
        if (resultado) {
            setDataUsuario(resultado)
        }
        else {
            alert('Ops dados..')
        }
    }

    useEffect(() => {
        searchTokenUser();
        buscaDadosDoUsuario();
    }, [tokenUser])

    return (
        <ScreenView>
            <Header icon={BackIcon} />
            <View style={styles.container}>
                <View style={styles.viewAreaPhotoUser}>
                    {dataUsuario?.photo ? (
                        <View style={styles.viewPhotoUser}>
                            <Image style={styles.photoUser} source={{ uri: dataUsuario?.photo }} resizeMode="cover" />
                        </View>
                    ) :
                        (
                            <View style={styles.viewPhotoUser}>
                                <Text style={styles.textNoPhoto}>NT</Text>
                            </View>
                        )}

                </View>
                <View style={styles.viewDataUser}>
                    <Text style={[styles.dataUser, { fontWeight: '800' }]}>{`${dataUsuario?.firstName} ${dataUsuario?.lastName}`}</Text>
                    <Text style={[styles.dataUser, { fontWeight: '600' }]}>{dataUsuario?.email}</Text>
                    <Text style={[styles.dataUser, { fontWeight: '600' }]}>{dataUsuario?.role}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.viewAreaCardOption}>
                    <TouchableOpacity onPress={LinkingWhatsapp}>
                        <View style={styles.viewCardOption}>
                            <WhatsappIconRounded width="18.57" height="18.57" fill="#131313" />
                            <Text style={styles.textInfomation}>Atendimento por WhatsApp</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
        marginTop: 30
    },
    viewAreaPhotoUser: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewPhotoUser: {
        width: 180,
        height: 180,
        borderRadius: 180 + 180 / 2,
        backgroundColor: colors.primaryDefault,
        justifyContent: 'center',
        alignItems: 'center'
    },
    photoUser: {
        width: 180,
        height: 180,
        borderRadius: 180 + 180 / 2
    },
    textNoPhoto: {
        fontSize: 70,
        color: '#FFFFFF'
    },
    viewDataUser: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    dataUser: {
        fontSize: 14,
        color: colors.neutralDark,
        marginTop: 8,
    },
    viewAreaCardOption: {
        justifyContent: 'flex-start',
        width: '100%'
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
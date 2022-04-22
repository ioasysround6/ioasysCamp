import React, { useState } from 'react';
import { View, Text, Image, Alert, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Header from '../components/Header';
import ScreenView from '../components/ScreenView';

import { registerUser } from '../services/requisicoes/signUp';

import { colors } from '../styles/colors';

import WhatsappIcon from '../../src/assets/whatsapp.png';

import BackButton from '../../src/assets/back.png';
import InputArea from '../components/InputArea';
import ButtonLarge from '../components/ButtonLarge';
import { useNavigation } from '@react-navigation/native';

export default function Register() {

    const [name, setName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [errorName, setErrorName] = useState('');
    const [errorMiddleName, setErrorMiddleName] = useState('');
    const [errorbirthday, setErrorBirthday] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const [photo, setPhoto] = useState('link da foto do perfil');

    function validateEmail(email) {
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return re.test(email);
    }

    function validatePassword(password) {
        var re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
        return re.test(password);
    }

    function validateData(data) {
        var re = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
        return re.test(data);
    }

    async function createUser() {
        const resultado = await registerUser(
            name,
            middleName,
            birthday,
            email,
            password,

            // photo,
        )
        if (resultado === true) {
            Alert.alert('Usuário cadastrado com sucesso')
            navigation.navigate('LoginScreen')
        }
        else if (name === '') {
            setErrorName('Favor preencher seu nome');
            setTimeout(() => {
                setErrorName('');
            }, 2000)


        }
        else if (middleName === '') {
            setErrorMiddleName('Favor preencher um sobrenome');
            setTimeout(() => {
                setErrorMiddleName('');
            }, 2000)
        }
        else if (!validateData(birthday)) {
            setErrorBirthday('Esse não é um formato válido de data');
            setTimeout(() => {
                setErrorBirthday('');
            }, 2000)
        }
        else if (!validateEmail(email)) {
            setErrorEmail('Esse não é um formato válido de e-mail');
            setTimeout(() => {
                setErrorEmail('');
            }, 2000)
        }
        else if (!validatePassword(password)) {
            setErrorPassword('A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caracter especial');
            setTimeout(() => {
                setErrorPassword('');
            }, 5000)
        }
        else {
            Alert.alert('Erro ao cadastrar usuário')
        }
    }

    const navigation = useNavigation();

    function handleGoLogin() {
        navigation.goBack();
    }

    function handleGoWhatsapp() {
        Linking.openURL(`https://api.whatsapp.com/send?phone=5585997549596&text=Ol%C3%A1!%20Preciso%20de%20ajuda%20no%20cadastro.`);
    }

    return (
        <ScreenView>
            <Header TextButtonHeaderRight='Pular' icon={BackButton} />
            <ScrollView>
                <View style={styles.ViewTitleRegister}>
                    <Text style={styles.TextRegister}>Cadastro:</Text>
                </View>
                <View style={styles.ViewInputs}>
                    <InputArea titulo='Nome' placeholder="Seu nome" onChangeText={setName} />
                    {errorName ? (
                        <Text style={{ fontSize: 12, color: colors.indicativeError }}>{errorName}</Text>
                    ) :
                        (
                            <></>
                        )}
                </View>
                <View style={styles.ViewInputs}>
                    <InputArea titulo='Sobrenome' placeholder="Seu sobrenome" onChangeText={setMiddleName} />
                    {errorMiddleName ? (
                        <Text style={{ fontSize: 12, color: colors.indicativeError }}>{errorMiddleName}</Text>
                    ) : (
                        <></>
                    )}
                </View>

                <View style={styles.ViewInputs}>
                    <InputArea titulo='Data de nascimento' placeholder="YYYY-MM-DD" onChangeText={setBirthday} />
                    {errorbirthday ? (
                        <Text style={{ fontSize: 12, color: colors.indicativeError }}>{errorbirthday}</Text>
                    ) :
                        (
                            <></>
                        )}
                </View>
                <View style={styles.ViewInputs}>
                    <InputArea titulo='E-mail' placeholder="Seu e-mail" onChangeText={setEmail} />
                    {errorEmail ? (
                        <Text style={{ fontSize: 12, color: colors.indicativeError }}>{errorEmail}</Text>
                    ) :
                        (
                            <></>
                        )}
                </View>
                <View style={styles.ViewInputs}>
                    <InputArea titulo='Senha' placeholder="**********" onChangeText={setPassword} />
                    {errorPassword ? (
                        <Text style={{ fontSize: 12, color: colors.indicativeError }}>{errorPassword}</Text>
                    ) :
                        (
                            <></>
                        )}
                </View>
                <Text style={styles.viewTextTerms}>Concordo com os Termos de uso</Text>
                <ButtonLarge titulo='Confirmar cadastro' backColor={colors.secondaryDefault} onPress={createUser} />
                <Text style={styles.TextHelpUser}>Está com dificuldade para realizar o cadastro?</Text>
                <View style={styles.viewAreaWppContact}>
                    <TouchableOpacity onPress={handleGoWhatsapp}>
                        <Text style={styles.TextWhatsappContact}>Entre em contato</Text>
                    </TouchableOpacity>
                    <Image source={WhatsappIcon} />

                </View>
            </ScrollView>
        </ScreenView>
    );
}

const styles = StyleSheet.create({
    ViewTitleRegister: {
        marginTop: 10,
        marginBottom: 24
    },
    TextRegister: {
        fontSize: 24,
        fontWeight: '400',
        color: "#000000"
    },
    ViewInputs: {
        marginBottom: 19
    },
    viewTextTerms: {
        marginBottom: 25
    },
    TextHelpUser: {
        fontSize: 12,
        fontWeight: '400',
        marginTop: 16,
        color: colors.neutralDark
    },
    viewAreaWppContact: {
        flexDirection: 'row',
        marginTop: 4
    },
    TextWhatsappContact: {
        fontSize: 12,
        fontWeight: '600',
        marginRight: 4,
        color: colors.primaryDefault
    }
})
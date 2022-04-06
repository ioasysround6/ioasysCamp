import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../components/Header';
import ScreenView from '../components/ScreenView';

import { colors } from '../styles/colors';

import WhatsappIcon from '../../src/assets/whatsapp.png';

import BackButton from '../../src/assets/back.png';
import InputArea from '../components/InputArea';
import ButtonLarge from '../components/ButtonLarge';

export default function Register() {
    return (
        <ScreenView>
            <Header TextButtonHeaderRight='Pular' icon={BackButton} />
            <View style={{ marginTop: 10, marginBottom: 24 }}>
                <Text style={{ fontSize: 24, fontWeight: '400', color: "#000000" }}>Cadastro:</Text>
            </View>
            <View style={{ marginBottom: 16 }}>
                <InputArea titulo='Nome' corBorda={colors.neutralDark} placeholder="Seu nome" />
            </View>
            <View style={{ marginBottom: 16 }}>
                <InputArea titulo='Sobrenome' corBorda={colors.neutralDark} placeholder="Seu sobrenome" />
            </View>
            <View style={{ marginBottom: 16 }}>
                <InputArea titulo='Data de nascimento' corBorda={colors.neutralDark} placeholder="01/01/1999" />
            </View>
            <View style={{ marginBottom: 16 }}>
                <InputArea titulo='E-mail' corBorda={colors.neutralDark} placeholder="Seu e-mail" />
            </View>
            <View style={{ marginBottom: 16 }}>
                <InputArea titulo='Senha' corBorda={colors.neutralDark} placeholder="**********" />
            </View>
            <Text style={{ marginBottom: 25 }}>Concordo com os Termos de uso</Text>
            <ButtonLarge titulo='Confirmar cadastro' backColor={colors.neutralMediumDark} />
            <Text style={{ fontSize: 12, fontWeight: '400', marginTop: 16, color: colors.neutralMediumDark }}>Está com dificuldade para realizar o cadastro?</Text>
            <View style={{flexDirection:'row', marginTop:4}}>
                <Text style={{ fontSize: 12, fontWeight: '600', marginRight:4, }}>Entre em contato</Text>
                <Image source={WhatsappIcon} />
            </View>

        </ScreenView>
    );
}
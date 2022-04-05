import React from 'react';
import { StatusBar, View, Image, Text, TouchableOpacity } from 'react-native';
import ScreenView from '../components/ScreenView';
import Header from '..//components/Header';

// import HomeActiveIcon from '../../src/assets/HomeActiveIcon';
import BackButton from '../../src/assets/back.png';
import Logo from '../../src/assets/logo.png';
import FacebookLogo from '../../src/assets/facebook.png';
import GoogleLogo from '../../src/assets/google.png';

import InputArea from '../components/InputArea';
import { colors } from '../styles/colors';
import ButtonLarge from '../components/ButtonLarge';

export default function Login() {
	return (
		<ScreenView>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor='#FCFCFC'
      />
			<Header TextButtonHeaderRight='Pular' icon={BackButton} />
			<View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 64, marginTop: 30 }}>
				<Image style={{ width: 72, height: 72 }} source={Logo} />
			</View>
			<View style={{ marginBottom: 20 }}>
				<InputArea titulo='E-mail' corBorda={colors.neutralDark} placeholder='exemplo@email.com' />
			</View>
			<View>
				<InputArea titulo='Senha' corBorda={colors.neutralDark} placeholder='******' />
				<View style={{ alignItems: 'flex-end', marginTop: 8, paddingBottom: 50 }}>
					<TouchableOpacity>
						<Text style={{ color: colors.neutralDark }}>Esqueci minha senha</Text>
					</TouchableOpacity>
				</View>
				<ButtonLarge titulo='Entrar na minha conta' backColor={colors.neutralDark} />
				<View style={{ alignItems: 'center', marginTop: 20, paddingBottom: 52 }}>
					<TouchableOpacity>
						<Text>Não possui uma conta ainda? Criar conta</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ width: '100%', borderWidth: 1, borderColor: colors.neutralMediumLight, marginBottom: 16 }}></View>
			<View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 24 }}>
				<Text style={{ color: colors.neutralDark }}>Acessar com:</Text>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
				<TouchableOpacity>
					<Image source={FacebookLogo} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Image source={GoogleLogo} />
				</TouchableOpacity>
			</View>
		</ScreenView>
	);
}
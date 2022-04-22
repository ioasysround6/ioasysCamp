import React, { useState, useEffect } from 'react';
import { StatusBar, View, Image, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import ScreenView from '../components/ScreenView';
import Header from '..//components/Header';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import HomeActiveIcon from '../../src/assets/HomeActiveIcon';
import BackButton from '../../src/assets/back.png';
import Logo from '../../src/assets/logo.png';
import FacebookLogo from '../../src/assets/PNG/facebook.png';
import GoogleLogo from '../../src/assets/PNG/google.png';

import LogoLogin from '../assets/SVG/LogoLogin.svg';
import LateralHome from '../assets/SVG/LateralHome.svg';
import Facebook from '../assets/SVG/Facebook.svg';
import Google from '../assets/SVG/Google.svg';

import InputArea from '../components/InputArea';
import { colors } from '../styles/colors';
import ButtonLarge from '../components/ButtonLarge';
import { useNavigation } from '@react-navigation/native';

import { loginUser } from '../services/requisicoes/loginAuth';


export default function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	const [errorEmail, setErrorEmail] = useState('');
	const [errorPassword, setErrorPassword] = useState('');
	const [errorLogin, setErrorLogin] = useState('');

	const navigation = useNavigation();

	function handleGoRegister() {
		navigation.navigate("Register");
	}
	function handleGoHome() {
		navigation.navigate("HomeScreen");
	}

	async function handleLoginUser() {
		const resultado = await loginUser(
			email,
			password,
		)
		if (resultado === true) {
			Alert.alert('Login realizado com sucesso')
			navigation.navigate('HomeScreen')
		}
		else if (email === '') {
			setErrorEmail('Favor digitar seu e-mail');
			setTimeout(() => {
				setErrorEmail('');
			}, 2000)
		}
		else if (password === '') {
			setErrorPassword('Favor digitar sua senha');
			setTimeout(() => {
				setErrorPassword('');
			}, 2000)
		}
		else {
			setErrorLogin('Usuário e/ou senha inválidos.');
			setTimeout(() => {
				setErrorLogin('');
			}, 2000)
			// Alert.alert('Usuário ou senha incorretos')
		}
	}

	useEffect(() => {
		AsyncStorage.getItem("TOKEN").then((token) => {
			console.log(token)
			{
				token ? (
					navigation.navigate('HomeScreen')
				) :
					(
						navigation.navigate('LoginScreen')
					)
			}
		})
	}, [])

	return (
		// <ScrollView>
		<View style={{ flex: 1 }}>
			<StatusBar
				backgroundColor='transparent'
				translucent
			/>

			<View style={{ backgroundColor: colors.primaryDefault, width: '100%', height: 236, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, zIndex: 1 }}>

				<View style={{ position: 'absolute', zIndex: 1, opacity: 0.03, backgroundColor: 'blue', width: '100%', alignItems: 'center', borderRadius: 30 }}>
					<LateralHome width={'120%'} height={47.2} />
					<LateralHome width={'120%'} height={47.2} />
					<LateralHome width={'120%'} height={47.2} />
					<LateralHome width={'120%'} height={47.2} />
					<LateralHome width={'120%'} height={47.2} />
				</View>

				<View style={{ width: '100%', alignItems: 'flex-end', zIndex: 2 }}>
					<TouchableOpacity onPress={handleGoHome} style={styles.headerBotao}>
						<View>
							<Text style={{ fontSize: 14, fontWeight: '600', color: colors.neutralLighter }}>Pular</Text>
						</View>
					</TouchableOpacity>
				</View>

				{/* <Header TextButtonHeaderRight='Pular' icon={BackButton} colorText={colors.primaryDefault} /> */}

				<View style={styles.viewImageLogo}>
					<LogoLogin style={{ width: 120, height: 64.94 }} />
				</View>


			</View>

			<View style={{ marginLeft: 32, marginRight: 32, marginTop: 44 }}>
				<View style={styles.viewInputEmail}>
					<InputArea titulo='E-mail' corBorda={colors.neutralDark} placeholder='exemplo@email.com' onChangeText={setEmail} />
					{errorEmail ? (
						<Text style={styles.textIndicativeError}>{errorEmail}</Text>
					)
						: (
							<></>
						)}
				</View>
				<InputArea titulo='Senha' corBorda={colors.neutralDark} placeholder='******' onChangeText={setPassword} secutiryText={true} />
				{errorPassword ? (
					<Text style={styles.textIndicativeError}>{errorPassword}</Text>
				) : (
					<></>
				)}
				<View style={styles.viewForgotPassword}>
					<TouchableOpacity>
						<Text style={styles.textForgotPassword}>Esqueci minha senha</Text>
					</TouchableOpacity>
				</View>
				<View style={{ alignItems: 'flex-start', marginBottom: 16 }}>
					{errorLogin ? (
						<Text style={styles.textIndicativeError}>{errorLogin}</Text>
					) : (
						<></>
					)}
				</View>

				<ButtonLarge titulo='Entrar na minha conta' backColor={colors.primaryDefault} onPress={handleLoginUser} />
				<View style={styles.viewCreateAccount}>
					<View style={styles.viewTextCreateAccount}>
						<Text style={styles.textCreateAccount}>Não possui uma conta ainda?  </Text>
						<TouchableOpacity onPress={handleGoRegister}>
							<Text style={[styles.textCreateAccount, { color: colors.primaryDefault }]}>Criar conta</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.uderLine}></View>
				<View style={styles.viewOptionsAccess}>
					<Text style={styles.textAccessOption}>Acessar com:</Text>
				</View>
				<View style={styles.viewIconsAccess}>
					<TouchableOpacity activeOpacity={0.6}>
						<Facebook width={40} height={40} />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.6}>
						<Google width={40} height={40} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
		// </ScrollView>
	);
}

const styles = StyleSheet.create({
	headerBotao: {
		zIndex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		marginRight: 13,
		paddingHorizontal: 20,
		paddingVertical: 20
	},
	viewImageLogo: {
		zIndex: 2,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 8
	},
	viewInputEmail: {
		marginBottom: 20
	},
	viewForgotPassword: {
		alignItems: 'flex-end',
		marginTop: 8,
		paddingBottom: 21
	},
	viewCreateAccount: {
		alignItems: 'center',
		marginTop: 20,
		paddingBottom: 40,
	},
	viewTextCreateAccount: {
		flexDirection: 'row'
	},
	textCreateAccount: {
		fontWeight: '600',
		fontSize: 12,
	},
	uderLine: {
		width: '100%',
		borderWidth: 1,
		borderColor: colors.neutralMediumLight,
		marginBottom: 16,
	},
	viewOptionsAccess: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 24
	},
	textAccessOption: {
		color: colors.neutralDark,
		fontSize: 14,
		fontWeight: '600'
	},
	viewIconsAccess: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		paddingBottom: 80
	},
	textForgotPassword: {
		fontWeight: '600',
		color: colors.primaryDefault,
		fontSize: 12
	},
	textIndicativeError: {
		fontSize: 12,
		fontWeight: '600',
		color: colors.indicativeError
	}
})
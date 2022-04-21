import React,{useState, useEffect} from 'react';
import { StatusBar, View, Image, Text, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import ScreenView from '../components/ScreenView';
import Header from '..//components/Header';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import HomeActiveIcon from '../../src/assets/HomeActiveIcon';
import BackButton from '../../src/assets/back.png';
import Logo from '../../src/assets/logo.png';
import FacebookLogo from '../../src/assets/PNG/facebook.png';
import GoogleLogo from '../../src/assets/PNG/google.png';

import InputArea from '../components/InputArea';
import { colors } from '../styles/colors';
import ButtonLarge from '../components/ButtonLarge';
import { useNavigation } from '@react-navigation/native';

import { loginUser } from '../services/requisicoes/loginAuth';


export default function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigation = useNavigation();

	function handleGoRegister() {
        navigation.navigate("Register");
    }

	async function handleLoginUser() {
        const resultado = await loginUser(
            email,
            password,
        )
        if (resultado === true) {
            Alert.alert('Login realizar com sucesso')
            navigation.navigate('HomeScreen')
        }
        else {
            Alert.alert('Erro ao fazer login')
        }
    }

	useEffect(()=>{
		AsyncStorage.getItem("TOKEN").then((token)=>{
			console.log(token)
			{token ? (
				navigation.navigate('HomeScreen')
			):
			(	
				navigation.navigate('LoginScreen')
			)}
		})
	},[])

	return (
		<ScreenView>
			<StatusBar
				backgroundColor='transparent'
				translucent
			/>
			<Header TextButtonHeaderRight='Pular' icon={BackButton} colorText={colors.primaryDefault} />
			<View style={styles.viewImageLogo}>
				<Image style={styles.imageLogo} source={Logo} />
			</View>
			<View style={styles.viewInputEmail}>
				<InputArea titulo='E-mail' corBorda={colors.neutralDark} placeholder='exemplo@email.com' onChangeText={setEmail} />
			</View>
			<InputArea titulo='Senha' corBorda={colors.neutralDark} placeholder='******' onChangeText={setPassword}/>
			<View style={styles.viewForgotPassword}>
				<TouchableOpacity>
					<Text style={styles.textForgotPassword}>Esqueci minha senha</Text>
				</TouchableOpacity>
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

const styles = StyleSheet.create({
	viewImageLogo: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 64,
		marginTop: 30
	},
	imageLogo: {
		width: 72,
		height: 72
	},
	viewInputEmail: {
		marginBottom: 20
	},
	viewForgotPassword: {
		alignItems: 'flex-end',
		marginTop: 8,
		paddingBottom: 50
	},
	viewCreateAccount: {
		alignItems: 'center',
		marginTop: 20,
		paddingBottom: 52,
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
		marginBottom: 16
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
		alignItems: 'center'
	},
	textForgotPassword: {
		fontWeight: '600',
		color: colors.primaryDefault,
		fontSize: 12
	}
})
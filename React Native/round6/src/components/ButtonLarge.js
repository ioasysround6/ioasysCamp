import React from "react";

import {TouchableHighlight, StyleSheet, Text} from 'react-native';

const ButtonLarge = ({titulo, backColor, underlayColor, botaodesativado , onPress}) =>{
	return(

	<TouchableHighlight
		activeOpacity={0.6}
		underlayColor={underlayColor}
		disabled={botaodesativado} 
		style={[styles.botao, {backgroundColor:backColor}]}
		onPress={onPress}
	>
		<Text style={styles.tituloBotao}>{titulo}</Text>

	</TouchableHighlight>

	);
}

const styles = StyleSheet.create({
	botao:{
		width: '100%',
		height: 52,
		justifyContent:'center',
		alignItems: 'center',
		// backgroundColor: colors.primaryDefault,
		borderRadius:12,
	},
	tituloBotao:{
		fontSize: 14,
		color: '#FCFCFC',
		fontWeight:'600'
	}
})

export default ButtonLarge;
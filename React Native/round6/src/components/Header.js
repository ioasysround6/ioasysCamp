import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/core';
import HomeActiveIcon from '../assets/HomeActiveIcon.svg';
import { colors } from '../styles/colors';

export default function Header({ TextButtonHeaderRight, icon }) {
	const navigation = useNavigation();

	function handleMoveOn(){
		navigation.navigate("HomeScreen");
	}

	return (
		<View style={styles.viewHeader}>
			<Image source={icon} />
			{/* <>{icon}</> */}
			{/* <HomeActiveIcon/> */}
			<TouchableOpacity onPress={handleMoveOn}>
				<Text style={styles.textButtonHeader}>{TextButtonHeaderRight}</Text>
			</TouchableOpacity>
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


import React from 'react';
import { colors } from '../styles/colors';

import { KeyboardAvoidingView, Dimensions, StyleSheet, View, Text, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Radio({
  options=[], 
  horizontal=false, 
  onChangeSelect, 
  selected
}){
  return (
    <View style={horizontal ? styles.horizontal : styles.vertical}>
      {
        options.map((opt, index) => (
          <TouchableOpacity 
            key={opt}
            onPress={() => onChangeSelect(index)} 
            style={styles.optContainer}>
            <View style={[styles.outlineCircle, {borderColor: selected === index ? colors.primaryDefault : colors.neutralDarker}]}>
              {selected === index && <View style={styles.innerCircle}/>}
            </View>
            <Text style={styles.text}>{opt}</Text>
          </TouchableOpacity>
        ))
      }

    </View>
  );
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
	optContainer: {
    flexDirection: 'row',
    alignItems: 'center',
	},
  outlineCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primaryDefault,
  },
  text: {
    fontSize: 14,
    marginLeft: 8,
    color: colors.neutralDarker
  }
})
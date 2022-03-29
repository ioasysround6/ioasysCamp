import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { colors } from "../styles/colors";

const ButtonSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
      <View style={styles.container}>
      <Switch
        trackColor={{ false: colors.primaryDefault, true: colors.primaryDefault }}
        thumbColor={isEnabled ? colors.neutralLighter : colors.neutralLighter}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:48,
    height:28,
    borderRadius: 20,
    backgroundColor: colors.primaryDefault,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ButtonSwitch;
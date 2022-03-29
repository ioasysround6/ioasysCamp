import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { colors } from "../styles/colors";

const ButtonSwitch = ({falseColor, trueColor, enabledColor, disabledColor}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
      <View style={styles.container}>
      <Switch
        trackColor={{ false: falseColor, true: trueColor }}
        thumbColor={isEnabled ? enabledColor : disabledColor}
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
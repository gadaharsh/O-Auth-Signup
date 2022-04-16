import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import icon from "../../assets/signup.gif";

const SignUpScreen = () => {
  return (
    <View style={styles.root}>
      <Text>SignUpScreen</Text>
      <Image source={icon} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default SignUpScreen;

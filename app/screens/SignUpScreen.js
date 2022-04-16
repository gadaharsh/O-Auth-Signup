import { View, Text, Image, StyleSheet,useWindowDimensions } from "react-native";
import React from "react";
import icon from "../../assets/signup.gif";

const SignUpScreen = () => {

  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>
      {/* <Text>SignUpScreen</Text> */}
      <Image source={icon} style={[styles.icon, {height: height * 0.4}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: { 
    alignItems: "center",
    padding: "5%",
  },
  icon: {
    width: "70%",
    // height: "70%",
    maxHeight: 300,
    maxWidth: 300,
    resizeMode: "contain",
    // borderRadius: 2,
    // overflow: "hidden",
  },
});

export default SignUpScreen;

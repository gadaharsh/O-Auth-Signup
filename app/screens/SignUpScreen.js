import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import icon from "../../assets/signup.gif";
import CustomButton from "../components/CustomButton";

const onButtonPress = () => {
  console.warn("Button Clicked");
};

const onSignInGoogle = () => {
  console.warn("Sign In with Google");
};

const onSignInFacebook = () => {
  console.warn("Sign In with Facebook");
};

const onSignInGithub = () => {
  console.warn("Sign In with Github");
};

const SignUpScreen = () => {
  const { height } = useWindowDimensions();

  return (
    <View style={styles.root}>
      {/* <Text>SignUpScreen</Text> */}
      <Image source={icon} style={[styles.icon, { height: height * 0.4 }]} />

      <CustomButton onPress={onButtonPress} text="Button" />

      <CustomButton
        onPress={onSignInGoogle}
        text="Sign In with Google"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        onPress={onSignInFacebook}
        text="Sign In with Facebook"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        onPress={onSignInGithub}
        text="Sign In with Github"
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
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

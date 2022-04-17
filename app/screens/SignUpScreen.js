import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from 'react';
import icon from "../../assets/signup.gif";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../../firebase';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

const SignUpScreen = ({ navigation }) => {

  const initAsync = async () => {
    await GoogleSignIn.initAsync({
      // You may ommit the clientId when the firebase `googleServicesFile` is configured
      clientId: '58546763613-oercrvugokjfcs7cmkfe5c49pdf3qgpg.apps.googleusercontent.com',
    });
    this._syncUserWithStateAsync();
  };

  const [user,setUser] = useState(null);
  const { height } = useWindowDimensions();

  const checkIfLoggedIn = () =>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
      navigation.navigate("Dashboard")
      }else {
        navigation.navigate("SignIn")
      }
    })
  }

  const onButtonPress = () => {
    console.warn("Button Clicked");
    navigation.navigate("Dashboard");
  };

  const onSignInGoogle = () => {
    console.warn("Sign In with Google");
    navigation.navigate('Dashboard')
  };

  const onSignInFacebook = () => {
    console.warn("Sign In with Facebook");
  };

  const onSignInGithub = () => {
    console.warn("Sign In with Github");
  };

  useEffect( async () => {
    await checkIfLoggedIn()
  }, [])
  


  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
      <View style={styles.root}>
        {/* <Text>SignUpScreen</Text> */}
        <Image source={icon} style={[styles.icon, { height: height * 0.4 }]} />

        <CustomButton onPress={onButtonPress} text="Button" />

        {/* <SocialSignInButtons /> */}

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

        <Text style={styles.text}>
          By registering, you confirm that you accept our
          <Text style={styles.link}> Terms of Use</Text> and
          <Text style={styles.link}> Privacy Policy</Text>.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
  },
  root: {
    // backgroundColor: '#fff',
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
  link: {
    color: "#FDB075",
  },
  text: {
    // fontWeight: "bold",
    color: "black",
  },
});

export default SignUpScreen;

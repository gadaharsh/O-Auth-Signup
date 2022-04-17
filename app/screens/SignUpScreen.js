import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import icon from "../../assets/signup.gif";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import * as Google from "expo-google-app-auth";

import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
// import * as Google from 'expo-auth-session/providers/google';
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { async } from "@firebase/util";

import * as Facebook from 'expo-facebook';

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyC5B50CwfNI4wnPQj6lUgcniWU8I1dP8WE",
  authDomain: "oauthsignup-33c26.firebaseapp.com",
  projectId: "oauthsignup-33c26",
  storageBucket: "oauthsignup-33c26.appspot.com",
  messagingSenderId: "58546763613",
  appId: "1:58546763613:web:e887cc6c345ae12af85ab4",
};

getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Listen for authentication state to change.
getAuth().onAuthStateChanged((user) => {
  if (user) {
    console.log("Logged in with user: ", user);
  } else {
    console.log('Not logged in')
  }
});

// WebBrowser.maybeCompleteAuthSession();

const SignUpScreen = ({ navigation }) => {
  const B = (props) => (
    <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
  );

  const [user, setUser] = useState(null);
  const { height } = useWindowDimensions();
  const [accessToken, setAcessToken] = useState();
  const [userInfo, setUserInfo] = useState();

  const checkIfLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Dashboard");
      } else {
        navigation.navigate("SignIn");
      }
    });
  };

  const onButtonPress = () => {
    console.warn("Button Clicked");
    navigation.navigate("Dashboard");
  };

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "58546763613-33tog5un7lrc6h1io85hmdpkdcasfqoi.apps.googleusercontent.com",
        iosClientID: "",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        setAcessToken(result.accessToken);
        // getUserData();
        let userInfoResponse = await fetch(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        userInfoResponse.json().then((data) => {
          setUserInfo(data);
          console.log(userInfo);
        });

        navigation.navigate("Dashboard", {
          picture: userInfo?.picture,
          name: userInfo?.name,
          email: userInfo?.email,
          provider: "Google",
        });
      } else {
        console.log("Permission Denied");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getUserData = async () => {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
      console.log(userInfo);
    });
  };

  const signInWithFacebookAsync = async() => {
    // console.warn("Sign In with Facebook");
    try {
      await Facebook.initializeAsync({appId: '393623052609213'}); //  Facebook App Id 
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      console.log(token)
      if (type === 'success') {
        const credential = getAuth.FacebookAuthProvider.credential(token);
        getAuth().signInWithCredential(credential)
          .then(user => {
            console.log('Logged in successfully', user)


            (async () => {
              let response = await fetch(`https://graph.facebook.com/me/?fields=id,name&access_token=${token}`);
            const Info = await response.json();
            setUserInfo(Info)
            })();

            navigation.navigate("Dashboard", {
              picture: userInfo?.picture,
              name: userInfo?.name,
              email: userInfo?.email,
              provider: "Facebook",
            });
            
          })
          .catch((error) => {
            console.log('Permission Denied or Error occurred ', error)
          });
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  const onSignInGithub = () => {
    console.warn("Sign In with Github");
  };

  // useEffect(  () => {
  //   if (response?.type === 'success') {
  //     const { id_token } = response.params;

  //     const auth = getAuth();
  //     const provider = new GoogleAuthProvider();
  //     const credential = provider.credential(id_token);
  //     signInWithCredential(auth, credential);
  //     navigation.navigate("Dashboard")
  //   }
  // }, [response])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
      <View style={styles.root}>
        {/* <Text>SignUpScreen</Text> */}
        <Image source={icon} style={[styles.icon, { height: height * 0.4 }]} />

        {/* <CustomButton onPress={onButtonPress} text="Button" /> */}

        {/* <SocialSignInButtons /> */}

        <Text style={styles.info}>
          Please <B>Sign In</B> to Continue
        </Text>

        <CustomButton
          onPress={signInWithGoogleAsync}
          text="Sign In with Google"
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          onPress={signInWithFacebookAsync}
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
    marginTop: "15%",
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
  info: {
    margin: "1%",
    fontSize: 18,
  },
});

export default SignUpScreen;

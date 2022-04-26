import { StyleSheet, Text, View, ScrollView,Image } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Google from 'expo-google-app-auth';
import * as WebBrowser from 'expo-web-browser'; 

const B = (props) => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

const Dashboard = ({ route, naviation }) => {
  
  

  const { picture, name, email, provider } = route.params;
  console.log(name)
  const fname = (name) ? (name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())): name;
  // const fname = name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

  return (
    {name} ?(
    <ScrollView style={styles.main}>
      <View style={styles.root}>
        {/* <Text>Dashboard Screen</Text> */}
        <View style={styles.userInfo}>
          <Text>You have signed in with <B>{provider}</B></Text>
          <Image source={{ uri: picture }} style={styles.profilePic}/>
          <Text>Welcome <B>{fname}</B></Text>
          <Text>Email: <B>{email}</B> </Text>
        </View>
        {/* <CustomButton text="Sign Out" onPress={signOut}/> */}
      </View>
    </ScrollView>
    ):(
      <Text>Loading</Text>
    )
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
  },
  root: {
    alignItems: "center",
    padding: "5%",
  },
  userInfo:{
    fontWeight: "bold",
    padding: 15,
    marginVertical: 15,
    justifyContent:"center",
    alignItems: "center",
  },
  profilePic:{
    width:100,
    height:100,
    borderRadius: 100,
    marginVertical: 10
  }
});


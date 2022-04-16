import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Dashboard = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.root}>
        <Text>Dashboard Screen</Text>
        <Text>Email: </Text>
        <CustomButton text="Button" />
      </View>
    </ScrollView>
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
});

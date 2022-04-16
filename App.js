import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SignUpScreen from "./app/screens/SignUpScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  return (
    <>
      
        <View style={styles.container}>
          <SignUpScreen/>
        </View>
       
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#85CDCA",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

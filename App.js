import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SignUpScreen from "./app/screens/SignUpScreen";



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

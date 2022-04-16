import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SignUpScreen from "./app/screens/SignUpScreen";


export default function App() {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Hello!</Text>
          <StatusBar style="auto" />
        </View>
        </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

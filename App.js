import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SignUpScreen from "./app/screens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./app/screens/Dashboard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <NavigationContainer style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="SignIn" component={SignUpScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: "#85CDCA",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

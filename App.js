import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RenovationsScreen from "./screens/RenovationsScreen";
import HomeDetailsScreen from "./screens/HomeDetailsScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.config";
import AddHomeDetails from "./screens/AddHomeDetails";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  useEffect(() => {
    return () => {
      setUser({});
    };
  }, []);

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return user === null ? (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          options={{ headerShown: false }}
          name="Kirjaudu"
          component={LoginScreen}
        />
        <Drawer.Screen name="Rekisteröidy" component={RegisterScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Koti" component={HomeScreen} />
        <Drawer.Screen name="Uusi" component={AddHomeDetails} />
        <Drawer.Screen name="Kodin tiedot" component={HomeDetailsScreen} />
        <Drawer.Screen name="Remontit" component={RenovationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
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

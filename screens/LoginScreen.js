import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  LogBox,
} from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  async function login() {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigation.navigate("Koti");
    } catch (error) {
      Alert.alert("Kirjautuminen epäonnistui.\n", error.message);
      console.log(error.message);
      LogBox.ign;
    }
  }

  const openRegisterForm = () => {
    navigation.navigate("Rekisteröidy");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text>Kirjaudu sisään</Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Sähköposti/käyttäjänimi"
          onChangeText={(loginEmail) => setLoginEmail(loginEmail)}
          value={loginEmail}
        />

        <Input
          placeholder="Salasana"
          onChangeText={(loginPassword) => setLoginPassword(loginPassword)}
          value={loginPassword}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.loginButton}
          onPress={login}
          title="Kirjaudu"
        />

        <Button
          buttonStyle={styles.registerButton}
          raised
          onPress={openRegisterForm}
          title="Rekisteröidy"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    marginTop: 30,
    width: "80%",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 30,
  },

  loginButton: {
    backgroundColor: "black",
  },

  registerButton: {
    backgroundColor: "green",
  },
});

import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase.config";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState({});

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      Alert.alert("Rekisteröinti onnistui!");
      navigation.navigate("Koti");
    } catch (error) {
      Alert.alert("Rekisteröinti epäonnistui.\n", error.message);
      console.log(error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text>Rekisteröinti</Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Sähköposti"
          onChangeText={(registerEmail) => setRegisterEmail(registerEmail)}
          value={registerEmail}
        />

        <Input
          placeholder="Salasana"
          onChangeText={(registerPassword) =>
            setRegisterPassword(registerPassword)
          }
          value={registerPassword}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.registerButton}
          raised
          onPress={register}
          title="Rekisteröidy"
        />
      </View>

      <Text>{user?.email}</Text>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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

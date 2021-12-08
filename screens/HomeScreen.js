import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { auth } from "../firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [welcomeUser, setWelcomeUser] = useState(auth.currentUser);

  onAuthStateChanged(auth, (currentUser) => {
    setWelcomeUser(currentUser);
  });

  async function logout() {
    try {
      await signOut(auth);
      Alert.alert("Olet kirjautunut ulos!");
      navigation.replace("Kirjaudu");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, textAlign: "center", marginTop: 20 }}>
        Tervetuloa, {"\n"} {welcomeUser?.email}{" "}
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.loginButton}
          onPress={logout}
          title="Kirjaudu ulos"
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    margin: 30,
  },

  loginButton: {
    backgroundColor: "black",
    alignItems: "baseline",
  },
});

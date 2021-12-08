import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Formik } from "formik";
import { Input, Button, Icon } from "react-native-elements";

const HomeDetailsScreen = () => {
  const [homeDetails, setHomeDetails] = useState([
    {
      kotiNimi: "Pispalantie",
      kotiTyyppi: "Kerrostalo",
      kotiPintaAla: "51",
      kotiOsoite: "Pispalantie 20 A 342",
      key: Math.random().toString(),
    },
  ]);

  return (
    <View>
      <FlatList
        data={homeDetails}
        renderItem={({ item }) => (
          <Text>
            Kodin nimi: {item.kotiNimi} {"\n"}
            Kodin tyyppi: {item.kotiTyyppi} {"\n"}
            Kodin pinta-ala: {item.kotiPintaAla} {"\n"}
            Kodin Osoite: {item.kotiOsoite} {"\n"}
            Kodin avain: {item.key} {"\n"}
          </Text>
        )}
      ></FlatList>
    </View>
  );
};

export default HomeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

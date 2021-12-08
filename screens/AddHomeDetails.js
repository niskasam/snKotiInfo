import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import { Input, Button, Icon } from "react-native-elements";

const AddHomeDetails = () => {
  return (
    <View>
      <Formik
        initialValues={{
          kotiNimi: "",
          kotiTyyppi: "",
          kotiPintaAla: "",
          kotiOsoite: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formikProps) => (
          <View>
            <Input
              placeholder="Syötä kodin nimi"
              onChangeText={formikProps.handleChange("kotiNimi")}
              value={formikProps.values.kotiNimi}
            />

            <Input
              placeholder="Syötä talon tyyppi"
              onChangeText={formikProps.handleChange("kotiTyyppi")}
              value={formikProps.values.kotiTyyppi}
            />

            <Input
              placeholder="Syötä kodin pinta-ala"
              onChangeText={formikProps.handleChange("kotiPintaAla")}
              value={formikProps.values.kotiPintaAla}
              keyboardType="numeric"
            />

            <Input
              placeholder="Syötä kodin osoite"
              onChangeText={formikProps.handleChange("kotiOsoite")}
              value={formikProps.values.kotiOsoite}
            />

            <Button
              buttonStyle={styles.registerButton}
              raised
              onPress={formikProps.handleSubmit}
              title="Lisää"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddHomeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

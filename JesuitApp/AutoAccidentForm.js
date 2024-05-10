import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const AutoAccidentForm = () => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      flatTire: false,
      brokenHeadlight: false,
      rearDamage: false,
      frontDamage: false,
      crackedWindshield: false,
      dentedBumper: false,
      dentedFrontBumper: false,
      scratchedPaint: false,
      sideMirrorDamage: false,
      exhaustDamage: false,
      shatteredWindow: false,
      tailLightDamage: false,
      airbagDeployment: false,
      undercarriageDamage: false,
      otherIssues: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const issues = [
    { name: "flatTire", label: "Flat Tire" },
    { name: "brokenHeadlight", label: "Broken Headlight" },
    { name: "tailLightDamage", label: "Tail Light Damage" },
    { name: "rearDamage", label: "Rear Damage" },
    { name: "frontDamage", label: "Front Damage" },
    { name: "crackedWindshield", label: "Cracked Windshield" },
    { name: "dentedRearBumper", label: "Dented Rear Bumper" },
    { name: "dentedFrontBumper", label: "Dented Front Bumper" },
    { name: "scratchedPaint", label: "Scratched Paint" },
    { name: "sideMirrorDamage", label: "Side Mirror Damage" },
    { name: "exhaustDamage", label: "Exhaust Damage" },
    { name: "shatteredWindow", label: "Shattered Window" },
    { name: "airbagDeployment", label: "Airbag Deployment" },
    { name: "undercarriageDamage", label: "Undercarriage Damage" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Auto Accident Form</Text>
      <View style={styles.formGroup}>
        {issues.map((item, index) => (
          <View key={index} style={styles.checkboxContainer}>
            <Controller
              control={control}
              name={item.name}
              render={({ field: { onChange, value } }) => (
                <BouncyCheckbox
                  isChecked={value}
                  fillColor="#0F9D58"
                  unfillColor="#FFFFFF"
                  text={item.label}
                  textStyle={styles.label}
                  onPress={(isChecked) => {
                    setValue(item.name, isChecked);
                  }}
                  style={styles.checkbox}
                />
              )}
            />
          </View>
        ))}
      </View>
      <Text style={styles.question}>
        Any other issues not previously listed?
      </Text>
      <Controller
        control={control}
        name="otherIssues"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.textInput}
            onChangeText={onChange}
            value={value}
            multiline
            numberOfLines={4}
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F1DD",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    marginLeft: 10, // Added some margin to align text nicely next to the checkbox
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
  },
});

export default AutoAccidentForm;

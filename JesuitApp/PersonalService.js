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

const PersonalServiceRequest = () => {
  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      lightsFlickering: false,
      acNotWorking: false,
      doorCreaking: false,
      waterLeak: false,
      heatingIssue: false,
      windowStuck: false,
      noiseIssue: false,
      lightsFlickeringDetail: "",
      acNotWorkingDetail: "",
      doorCreakingDetail: "",
      waterLeakDetail: "",
      heatingIssueDetail: "",
      windowStuckDetail: "",
      noiseIssueDetail: "",
      otherIssues: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const issues = [
    {
      name: "lightsFlickering",
      label: "Lights Flickering",
      detailName: "lightsFlickeringDetail",
    },
    {
      name: "acNotWorking",
      label: "AC Not Working",
      detailName: "acNotWorkingDetail",
    },
    {
      name: "doorCreaking",
      label: "Door Creaking Loudly",
      detailName: "doorCreakingDetail",
    },
    { name: "waterLeak", label: "Water Leak", detailName: "waterLeakDetail" },
    {
      name: "heatingIssue",
      label: "Heating Issue",
      detailName: "heatingIssueDetail",
    },
    {
      name: "windowStuck",
      label: "Window Stuck",
      detailName: "windowStuckDetail",
    },
    {
      name: "noiseIssue",
      label: "Noise Issue",
      detailName: "noiseIssueDetail",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Personal Service Request</Text>
      {issues.map((item, index) => (
        <View key={index} style={styles.formControl}>
          <Controller
            control={control}
            name={item.name}
            render={({ field: { onChange, value } }) => (
              <>
                <BouncyCheckbox
                  isChecked={!!value}
                  fillColor="#0F9D58"
                  unfillColor="#FFFFFF"
                  text={item.label}
                  textStyle={styles.label}
                  onPress={(isChecked) => {
                    setValue(item.name, isChecked);
                    if (!isChecked) setValue(item.detailName, "");
                  }}
                  style={styles.checkbox}
                />
                {value && (
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setValue(item.detailName, text)}
                    value={watch(item.detailName)}
                    placeholder="Feel free to explain more here"
                  />
                )}
              </>
            )}
          />
        </View>
      ))}
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
  formControl: {
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  checkbox: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    marginBottom: 10,
  },
  textInputLarge: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default PersonalServiceRequest;

import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Calendar } from "react-native-calendars";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function MealSignIn() {
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      attendingMeals: null, // Initial state with no selection
    },
  });
  const [selectedDates, setSelectedDates] = useState({});
  const attendingMeals = watch("attendingMeals");

  const onSubmit = (data) => {
    console.log(`Attending meals: ${data.attendingMeals}`);
    if (data.attendingMeals === "no") {
      console.log("Not attending on:", Object.keys(selectedDates));
    }
  };

  const handleDayPress = (day) => {
    const newDates = {
      ...selectedDates,
      [day.dateString]: { selected: true, marked: true },
    };
    setSelectedDates(newDates);
    console.log("Selected date:", day.dateString);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Will you be attending meals this week?
      </Text>
      <View style={styles.checkboxContainer}>
        <Controller
          control={control}
          name="attendingMeals"
          render={({ field: { onChange, value } }) => (
            <>
              <BouncyCheckbox
                isChecked={value === "yes"}
                fillColor="#4CAF50"
                unfillColor="#FFFFFF"
                text="Yes"
                textStyle={styles.label}
                onPress={(isChecked) => {
                  setValue("attendingMeals", isChecked ? "yes" : null);
                }}
                style={styles.checkbox}
              />
              <BouncyCheckbox
                isChecked={value === "no"}
                fillColor="#FF5252"
                unfillColor="#FFFFFF"
                text="No"
                textStyle={styles.label}
                onPress={(isChecked) => {
                  setValue("attendingMeals", isChecked ? "no" : null);
                }}
                style={styles.checkbox}
              />
            </>
          )}
        />
      </View>
      {attendingMeals === "no" && (
        <Calendar onDayPress={handleDayPress} markedDates={selectedDates} />
      )}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F5F1DD",
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%", // Ensuring full width for better layout
  },
  checkbox: {
    flex: 1, // Allow each checkbox to take equal space
    padding: 10,
  },
  label: {
    fontSize: 16,
    marginLeft: 10, // Add some space between the checkbox and the label
  },
});

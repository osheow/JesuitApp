import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Auth from "../components/Auth";

export default function ({ navigation }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Register</Text>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="user" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              onChangeText={setFirstName}
              value={firstName}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="user" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              onChangeText={setLastName}
              value={lastName}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="mail" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Email ID"
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="lock" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!passwordIsVisible}
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity
              style={styles.passwordVisibleButton}
              onPress={() => setPasswordIsVisible(!passwordIsVisible)}
            >
              <Feather
                name={passwordIsVisible ? "eye" : "eye-off"}
                size={20}
                color="#7C808D"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orLine} />
          </View>
          <View style={styles.googleButton}>
            <Auth />
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              navigation.navigate("UserLogin");
            }}
          >
            <Text style={styles.loginButtonText}>
              Already have an account?{" "}
              <Text style={styles.loginButtonTextHighlight}>Log in!</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    position: "relative",
  },
  icon: {
    marginRight: 15,
  },
  input: {
    borderBottomWidth: 1.5,
    flex: 1,
    paddingBottom: 10,
    borderBottomColor: "#eee",
    fontSize: 16,
  },
  passwordVisibleButton: {
    position: "absolute",
    right: 0,
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
  },
  forgotPasswordButtonText: {
    color: "#3662AA",
    fontSize: 16,
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: "#3662AA",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  orLine: {
    height: 1,
    backgroundColor: "#eee",
    flex: 1,
  },
  orText: {
    color: "#7C808D",
    marginRight: 10,
    marginLeft: 10,
    fontSize: 14,
  },
  googleButton: {
    backgroundColor: "#F2F6F2",
    padding: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  googleButtonText: {
    color: "#4E5867",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  googleLogo: {
    width: 20.03,
    height: 20.44,
    position: "absolute",
    left: 14,
  },
  registerButton: {
    alignSelf: "center",
    marginTop: 40,
  },
  registerButtonText: {
    fontSize: 16,
    color: "#7C808D",
  },
  registerButtonTextHighlight: {
    fontSize: 16,
    color: "#3662AA",
    fontWeight: "500",
  },
});

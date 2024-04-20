// Forms.js
import React from 'react';
import {View, StatusBar, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import {createStackNavigator} from '@react-navigation/stack';
import AbsenceForm from './AbsenceForm';
import ConfessionForm from './ConfessionSignUp';




const Stack = createStackNavigator();

const MainScreen = ({ navigation }) => {

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  // replace TouchableOpacity with Pressable

  const FormList = () => {
    return (
      <View style={styles.buttonContainer}> 

        <View style={styles.buttonRow}> 
          <Pressable style={styles.button} onPress={() => navigateToPage('AbsenceForm')}>  
            <Text> Absence Form </Text>
          </Pressable>
        </View>

        <View style={styles.buttonRow}> 
          <Pressable style={styles.button} onPress={() => navigateToPage('ConfessionSignUp')}>  
            <Text> Confession Sign Up </Text>
          </Pressable>
        </View>

        <View style={styles.buttonRow}> 
          <TouchableOpacity style={styles.button} onPress={() => WebBrowser.openBrowserAsync('https://docs.google.com/spreadsheets/d/1s8UnbW9bBQiayxoTMIkvEXvHISlnacDYQbr5Fxvjl-U/edit#gid=545893366')}>
            <Text>Car Reservation</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}> 
          <TouchableOpacity style={styles.button} onPress={() => WebBrowser.openBrowserAsync('https://www.google.com/drive/')}>
            <Text> Meal Sign-in/Sign-out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}> 
          <TouchableOpacity style={styles.button} onPress={() => WebBrowser.openBrowserAsync('https://docs.google.com/spreadsheets/d/1myN7jgf7RHKoyTvU-6uBudOwCyiHtUtU/edit#gid=1518481871')}>
            <Text> Community Room Reservation </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}> 
          <TouchableOpacity style={styles.button} onPress={() => WebBrowser.openBrowserAsync('https://www.google.com/drive/')}>
            <Text> Car Service Request </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}> 
          <TouchableOpacity style={styles.button} onPress={() => WebBrowser.openBrowserAsync('https://docs.google.com/spreadsheets/d/12xeGviMBXmZ7iSIxc3IqeNUTcr6BtXEv/edit#gid=1908601915')}>
            <Text>Personal Expenses Request & Worksheet</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}> 
          <TouchableOpacity style={styles.button} onPress={() => WebBrowser.openBrowserAsync('https://www.google.com/drive/')}>
            <Text> Automobile Accident Report </Text>
          </TouchableOpacity>
        </View>



      </View>
    );
};
  
return (
  <View style={styles.container}>
    <Text> Hello, welcome to the sign-ups page. </Text>
    {FormList()}
    <StatusBar style="auto" />
  </View>
);
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', //89f
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {

  },
  buttonContainer: {
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingVertical: 20,
    paddingBottom: 50,
    
    backgroundColor: '#fff',//'#93282a',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
   
  },
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2, 
    borderColor: '#93282a', ///'#000',
    backgroundColor: '#fff',
  },
});

 
  

export default function Forms() {
  return (
    //<NavigationContainer>
      <Stack.Navigator initialRouteName="Forms">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="AbsenceForm" component={AbsenceForm} />
        <Stack.Screen name="ConfessionSignUp" component={ConfessionForm} />
      </Stack.Navigator>
   // </NavigationContainer>
  );
}


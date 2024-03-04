import React from 'react';
import { StatusBar, TouchableOpacity, Text, View, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CommunityPage from './CommunityPage';
import Calendar from './Calendar';
import Forms from './Forms';
import MinistriesGuests from './MinistriesGuests';
import Provinces from './Provinces';
import Announcements from './Announcements';
import SignUps from './SignUps';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  const renderButtons = () => {
    if (Platform.OS === 'web') {
      // Render 1 row for web
      return (
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Community')}>
            <Text>Community</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Sign-ups')}>
            <Text>Sign-ups</Text>
          </TouchableOpacity>
          {/* Add other buttons for web */}
        </View>
      );
    } else {
      // Render 2 rows for iOS and Android
      return (
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Community')}>
              <Text>Community</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Sign-ups')}>
              <Text>Sign-ups</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Forms')}>
              <Text>Forms</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Provinces')}>
              <Text>Provinces</Text>
            </TouchableOpacity>
            {/* Add other buttons for iOS and Android row 1 */}
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Ministries')}>
              <Text>Ministries and Guests</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Announcements')}>
              <Text>Announcements</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Calendar')}>
              <Text>Calendar</Text>
            </TouchableOpacity>
            {/* Add other buttons for iOS and Android row 2 */}
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Your main content goes here */}
      <Text>Open up App.js to start working on your app!</Text>

      {/* Buttons at the bottom */}
      {renderButtons()}

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingVertical: 20,
    backgroundColor: '#93282a',
    ...Platform.select({
      ios: {
        paddingBottom: 50,
      },
      android: {},
    }),
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Community" component={CommunityPage} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Forms" component={Forms} />
        <Stack.Screen name="Ministries" component={MinistriesGuests} />
        <Stack.Screen name="Provinces" component={Provinces} />
        <Stack.Screen name="Announcements" component={Announcements} />
        <Stack.Screen name="Sign-ups" component={SignUps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

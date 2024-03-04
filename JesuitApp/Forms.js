// Forms.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Forms = ({ navigation }) => {
  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Forms Page!</Text>
      {/* Add your Forms page content here */}

      {/* "Return to Home Page" button */}
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
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#93282a',
  },
  Text:{
    color: 'black',
  }
});

export default Forms;

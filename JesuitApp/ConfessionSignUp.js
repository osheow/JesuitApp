import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Platform, Pressable, Text, View, StyleSheet, TextInput, ScrollView, Button } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const ConfessionSignUp = ({navigation}) => {

    // For Hook Forms
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
          firstName: '',
          lastName: '',
        }
      });

    const onSubmit = data => {
        console.log(data);
      };

    const onChange = arg => {
        return {
          value: arg.nativeEvent.text,
        };
      };
      

    return (
        <SafeAreaProvider>
        <ScrollView> 
        <View style={styles.container}>
          <Text style={styles.label}> First Name</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="firstName"
            rules={{ required: true }}
          />

        <Text style={styles.label}> Last Name</Text>
        <Controller
          control={control}
          render={({field: { onChange, onBlur, value }}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="lastName"
          rules={{ required: true }}
          />
        </View>
        </ScrollView>
        </SafeAreaProvider>
    )
    

}

const styles = StyleSheet.create({
    label: {
      color: 'black',
      margin: 20,
      marginLeft: 0,
    },
    button: {
      marginTop: 40,
      color: 'white',
      height: 40,
      backgroundColor: '#93282a',
      borderRadius: 4,
    },
    container: {
      flex: 1,
      justifyContent: '',
      paddingTop: Constants.statusBarHeight,
      padding: 8,
      backgroundColor: '#white',
    },
    input: {
      backgroundColor: 'white',
      borderColor: '#f0f',
      height: 40,
      padding: 10,
      borderRadius: 4,
    },

  });

export default ConfessionSignUp;
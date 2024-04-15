import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Platform, Pressable, Text, View, StyleSheet, TextInput, ScrollView, Button } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';


// absence form
const AbsenceForm = ({ navigation }) => {



// For Hook Forms
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
          firstName: '',
          lastName: '',
          absence: '',
          destination: '',
          whereabouts: '',
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
      
    



// For Date Picker 
    function useInput() {
      const [date, setDate] = useState(new Date());
      const [mode, setMode] = useState('date');
      const [show, setShow] = useState(false);

      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      }

      const showDatePicker = () => {
        showMode('date');
      }


      const onChangeTwo = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      
    }
    return {
      date,
      showDatePicker,
      show,
      mode,
      onChangeTwo
    }

  }

  const input = useInput(new Date())
  const input2 = useInput(new Date())



// for checkbox
function MyCheckboxOne() {

  const [whereabouts, setWhereabouts] = useState('None');
  const [checked, setChecked] = useState(false);
  
  console.log(checked);
  console.log(whereabouts);

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => {
        setChecked(!checked);
        if (checked == false) {
          setWhereabouts('Upon Request');
        } else {
          setWhereabouts('None');
        }
      }}>

      {checked && <Ionicons name="checkmark" size={21} color="white" />}
      
    </Pressable>
  );
}

function MyCheckboxTwo() {

  const [checked, setChecked] = useState(false);
  const [whereabouts, setWhereabouts] = useState('None');

  console.log(checked);
  console.log(whereabouts);

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => {
        setChecked(!checked);
        setWhereabouts('Only in Emergency');
      }}>
      {checked && <Ionicons name="checkmark" size={21} color="white" />}

    </Pressable>
    
  );
}

const [isChecked, setChecked] = useState(false);
 


// View
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


        <Text style={styles.label}>Purpose of Absence</Text>
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
            name="absence"
            rules={{ required: true }}
          />


        <View style={styles.containerDate}>
          <Text style={styles.label}> Date of Absence </Text>
          <View style={styles.test}>
          <Text style={styles.label}>From</Text>
                <DateTimePicker
                testID='dateTimePicker1'
                value={input.date}
                mode={input.mode}
                is24Hour={true}
                display='default'
                nChange={input.onChangeTwo}
                />
          </View>

        <View style={styles.test}>
          <Text style={styles.label}>To</Text>
          <DateTimePicker
            testID='dateTimePicker2'
            value={input2.date}
            mode={input2.mode}
            is24Hour={true}
            display='default'
            onChange={input2.onChangeTwo}
          />
        </View>
  
        </View>

        <Text style={styles.label}>Destination (Address, City, State) </Text>
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
            name="destination"
            rules={{ required: true }}
          />

        <Text style={styles.label}>Share information on whereabouts:</Text>
        <View style={styles.test2}> 

          <View style={styles.test3}> 
          <MyCheckboxOne/>
          <Text style={styles.text2}>Upon Request</Text>
          </View>

          <View style={styles.test3}> 
          <MyCheckboxTwo/>
          <Text style={styles.text2}>Only in Emergency</Text>
          </View>
          

        </View>
        

    
        <View style={styles.button}>
            <Button
              color="#fff"
              title="Submit"
              onPress={handleSubmit(onSubmit)}
            />
        </View>
        </View>
        </ScrollView>
        </SafeAreaProvider>
        )
    };

    


// stylesheet 
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
    containerDate : {
      flex: 1,
      margin: 0,
      //padding: 8,
      //backgroundColor: '#89f',
    },
    input: {
      backgroundColor: 'white',
      borderColor: '#f0f',
      height: 40,
      padding: 10,
      borderRadius: 4,
    },
    test: {
      flexDirection: 'row',
      alignItems: 'center',
      //backgroundColor: 'red',
    },
    test2: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      //backgroundColor: 'blue',
    },
    test3: {
      flexDirection: 'row',
      alignItems: 'center',
      //backgroundColor: 'green',

    },
    text2: {
      marginLeft: 10,
    },
    checkboxBase: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#93282a',
      backgroundColor: 'transparent',
    },
    checkboxChecked: {
      backgroundColor: '#93282a',
    },
  });


export default AbsenceForm;

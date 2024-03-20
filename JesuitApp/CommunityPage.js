import React, { useState, useRef, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { Platform } from 'react-native';

const CommunityPage = ({ navigation }) => {
  const [selectedContent, setSelectedContent] = useState('JesuitCalendar'); 
  const [buttonContainerHeight, setButtonContainerHeight] = useState(null);
  const buttonContainerRef = useRef(null);

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const JesuitCalendarEvents = [
      { id: 1, day: 'Tueday', date: 'January 2', description1: 'Community Mass, Social & Dinner',important: true},
      { id: 2, day: 'Wed-Fri', date: 'January 3-5', description1: 'AJCU Jesuit Board Members Conference (New Orleans)', important: false },
      { id: 3, day: 'Monday', date: 'January 8', description1: 'Classes begin', important: false },
      { id: 4, day: 'Tuesday', date: 'January 9', description1: 'Community Mass, Social Dinner & Community Meeting', important: true },
      { id: 5, day: 'Wednesday', date: 'January 10', description1: 'Consultors’ Meeting', important: false },
      { id: 6, day: 'Monday', date: 'January 15', description1: 'Martin Luther King Jr. Holiday', important: false },
      { id: 7, day: 'Tuesday', date: 'January 16', description1: 'Community Mass, Social & Dinner', important: true },
      { id: 8, day: 'Sat-Thursday', date: 'January 20-25', description1: 'Pastoral & Spiritual Assistance Conference (Allan Deck, SJ)', important: false },
      { id: 9, day: 'Tuesday', date: 'January 23', description1: 'Community Mass, Social Dinner & De Statu #3 Community Meeting', important: true },
      { id: 10, day: 'Wednesday', date: 'January 24', description1: 'Wellness Wednesday', important: false },
      { id: 11, day: 'Tuesday', date: 'January 30', description1: 'Birthday Dinner', important: false },
      { id: 12, day: 'Tuesday', date: 'February 6', description1: 'Community Mass, Social, Lunar New Year Celebration, Dinner', important: true },
      { id: 13, day: 'Wednesday', date: 'February 7', description1: 'Consultors’ Meeting', important: false },
      { id: 14, day: 'Sunday', date: 'February 11', description1: 'Superbowl', important: false },
      { id: 15, day: 'Tuesday', date: 'February 13', description1: 'Community Mass, Social, Dinner & Mardi Gras Celebration', important: true },
      { id: 16, day: 'Wednesday', date: 'February 14', description1: 'Ash Wednesday/ Wellness Wednesday', important: false },
      { id: 17, day: 'Saturday', date: 'February 17', description1: 'Family Weekend /JC Open House JAVA w the Jesuits (8:30am-10:30am)', important: false },
      { id: 18, day: 'Tuesday', date: 'February 20', description1: 'Community Mass, Social, Dinner & Community Meeting', important: false },
      { id: 19, day: 'Mon-Fri', date: 'Feb 26 - Mar 1', description1: 'Spring Break', important: false },
      { id: 20, day: 'Tuesday', date: 'February 27', description1: 'Community Mass, Social, Dinner & Birthday Dinner', important: true },
      { id: 21, day: 'Tuesday', date: 'March 5', description1: 'Community Mass, Social & Dinner', important: true },
      { id: 22, day: 'Wednesday', date: 'March 6', description1: 'Consultors’ Meeting', important: false },
      { id: 23, day: 'Sunday', date: 'March 10', description1: 'Academy Awards', important: false },
      { id: 24, day: 'Tuesday', date: 'March 12', description1: 'Community Mass (4:30pm), Social, Dinner& Yearly Meeting w President Snyder', important: true },
      { id: 25, day: 'Friday-Sunday', date: 'Mar 15-17', description1: 'Community Retreat – House of Prayer', important: false },
      { id: 26, day: 'Sunday', date: 'March 17', description1: 'St. Patrick’s Day Celebration', important: false },
      { id: 27, day: 'Tuesday', date: 'March 19', description1: 'Deanery Meeting & Lunch (12:00-2:00pm / House Library)', important: true },
      { id: 28, day: 'Tuesday', date: 'March 19', description1: 'Community Mtg. Mass Dinner & Conversation w Archbishop Gomez (5:30pm)', important: false },
      { id: 29, day: 'Wednesday', date: 'March 20', description1: 'Wellness Wednesday', important: false },
      { id: 30, day: 'Saturday', date: 'March 23', description1: 'Alpha Sigma Nu (1:00-5:00pm Jesuit Gardens)', important: false },
      { id: 31, day: 'Tuesday', date: 'March 26', description1: 'Community Mass, Social, Dinner & Reconciliation Service (7:15pm)/Birthday Dinner', important: true },
      { id: 32, day: 'Thursday', date: 'March 28', description1: 'Holy Thursday (Mass SHC Time: TBD)', important: false },
      { id: 33, day: 'Friday', date: 'March 29', description1: 'Good Friday', important: false },
      { id: 34, day: 'Sunday', date: 'March 31', description1: 'Easter', important: false },
      { id: 35, day: 'Monday', date: 'April 1', description1: 'Cesar Chavez Holiday', important: false },
      { id: 36, day: 'Tuesday', date: 'April 2', description1: 'Community Mass, Social, & Dinner', important: true },
      { id: 37, day: 'Wednesday', date: 'April 3', description1: 'Consultors Meeting', important: false },
      { id: 38, day: 'Sunday', date: 'April 7', description1: 'Teilhard Movie Screening (Location TBD; 3:30pm)', important: false },
      { id: 39, day: 'Tuesday', date: 'April 9', description1: 'John Sebastian VP Mission & Ministry at Mass, Social, Dinner & Community Meeting', important: true },
      { id: 40, day: 'Thu-Friday', date: 'April 11-19', description1: 'Provincial Visitation', important: false },
      { id: 41, day: 'Tuesday', date: 'April 16', description1: 'Community Mass, Social, Dinner & Meeting with the Provincial', important: true },
      { id: 42, day: 'Wednesday', date: 'April 17', description1: 'Wellness Wednesday', important: false },
      { id: 43, day: 'Tuesday', date: 'April 23', description1: 'Community Mass, Social & Dinner', important: true },
      { id: 44, day: 'Friday', date: 'April 26', description1: 'Last day of class /Senior Tours (10am-12noon)', important: false },
      { id: 45, day: 'Friday', date: 'April 26', description1: 'Faculty BBQ (5:00-7:00pm Jesuit Gardens)', important: false },
      { id: 46, day: 'Monday', date: 'Apr 29- May 3', description1: 'Finals Exams', important: false },
      { id: 47, day: 'Tuesday', date: 'Apr 30', description1: 'Community Mass & Jubilee Boat Cruise with Birthday Celebration', important: true },
      { id: 48, day: 'May', date: 'TBD', description1: 'BOT/Leadership & Deans Mass & Dinner (5:30pm)', important: false },
      { id: 49, day: 'Wednesday', date: 'May 1', description1: 'Consultors Meeting', important: false },
      { id: 50, day: 'Saturday', date: 'May 4', description1: 'Undergraduate Commencement Day', important: false },
      { id: 51, day: 'Tuesday', date: 'May 7', description1: 'Community Mass, Social, & Dinner', important: true },
      { id: 52, day: 'Monday', date: 'May 27', description1: 'Memorial Day', important: false },
      { id: 53, day: 'Tuesday', date: 'May 28', description1: 'Birthday Dinner', important: true },
      { id: 54, day: 'Saturday', date: 'June 8', description1: 'Ordinations (Los Angeles)', important: false },
      { id: 55, day: 'Sunday', date: 'June TBD', description1: 'CRS Awards Ceremony (2:00-3:00pm Jesuit Gardens)', important: false }
    ];
  const HousePolicies = [
  ];

  const displayContent = (content) => {
    setSelectedContent(content);
  };

  const toggleButtonContainer = () => {
    setButtonContainerHeight(buttonContainerHeight === 0 ? null : 0);
  };

  const getContent = () => {
    switch (selectedContent) {
      case 'JesuitCalendar':
        return (
          <View style={{ flex: 1, paddingHorizontal: 10, paddingTop: 30 }}>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
              <Row
                data={['Day', 'Date', 'Event']}
                style={styles.head}
                widthArr={Platform.OS === 'ios' ? [80, 100, 190] : undefined} // Adjust widths for iOS only
                textStyle={{
                  fontWeight: 'bold',
                  ...styles.text
                }}
              />
              {JesuitCalendarEvents.map(event => (
                <Row
                  key={event.id}
                  data={[
                    event.day,
                    event.date,
                    event.description1
                  ]}
                  style={styles.row}
                  widthArr={Platform.OS === 'ios' ? [80, 100, 190] : undefined} // Adjust widths for iOS only
                  textStyle={{
                    fontWeight: event.important ? 'bold' : 'normal',
                    ...styles.text,
                    flexWrap: 'wrap',
                    fontSize: Platform.OS === 'ios' ? 14 : 16,
                  }}
                />
              ))}
            </Table>
          </View>
        );
      case 'HousePolicies':
        return <Text>House Policies Content</Text>;
      case 'HouseJobs`':
        return <Text>House Jobs Content</Text>;
      case 'Presiding Assignments':
        return <Text>Presiding Assignments Content</Text>;
      case `Confession Assignments`:
        return <Text>Confession Assignments Content</Text>;
      case `Consultor's Meeting Minutes`:
        return <Text>Consultor's Meeting Minutes Content</Text>;
      case `Community Member Contact Information List`:
        return <Text>Community Member Contact Information List Content</Text>;
  
      default:
        return null;
    }
  };

  useLayoutEffect(() => {
    if (buttonContainerRef.current) {
      setButtonContainerHeight(buttonContainerRef.current.scrollHeight);
    }
  }, [buttonContainerRef.current]);

  useLayoutEffect(() => {
    if (buttonContainerRef.current) {
      setButtonContainerHeight(buttonContainerRef.current.scrollHeight);
    }
  }, [buttonContainerRef.current]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
      style={{flex: 1}}
      contentContainerStyle={{flexGrow: 1}}
      >
      <View stytles = {styles.scrollViewContent}>
        <View
          style={[styles.buttonContainer, { height: buttonContainerHeight }]}
          ref={buttonContainerRef}>
          <TouchableOpacity onPress={() => displayContent('JesuitCalendar')} style={styles.button}>
            <Text style={styles.Text}>Jesuit Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => displayContent('HousePolicies')} style={styles.button}>
            <Text style={styles.Text}>House Policies</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => displayContent('HouseJobs')} style={styles.button}>
            <Text style={styles.Text}>House Jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => displayContent('PresidingAssignments')} style={styles.button}>
            <Text style={styles.Text}>Presiding Assignments</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => displayContent('ConfessionAssignments')} style={styles.button}>
            <Text style={styles.Text}>Confession Assignments</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => displayContent('ConsultorMeetingMinutes')} style={styles.button}>
            <Text style={styles.Text}>Consultor's Meeting Minutes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => displayContent('CommunityMemberContactInformationList')} style={styles.button}>
            <Text style={styles.Text}>Community Member Contact Information List</Text>
          </TouchableOpacity>
      </View>

      {getContent()}

      <TouchableOpacity onPress={toggleButtonContainer} style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>
              {buttonContainerHeight === 0 ? 'Menu ↓' : 'Menu ↑'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  buttonContainer: {
    backgroundColor: '#93282a',
    paddingTop: 20,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  text: {
    margin: 6,
  },
  row: {
    height: 80,
  },
  importantRow: {
    fontWeight: 'bold',
  },
  toggleButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: '#93282a',
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#93282a',
  },
  eventsContainer: {
    flex: 1,
    padding: 20,
    marginTop: 10,
  },
  eventText: {
    color: 'black',
    marginBottom: 5,
  },
  Text: {
    color: 'white',
  },
  toggleButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: '#93282a',
    borderRadius: 5,
  },
  toggleButtonText: {
    color: 'white',
  },
  iosText: {
    fontSize: 16,
  },
});

export default CommunityPage;

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import React, { useState } from "react";
import styles from "./CalendarScreenStyles.js";

export default function CalendarScreen({ navigation }) {
  return <TaskCalendar />;
}

const TaskCalendar = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [tasks, setTasks] = useState({});
  const [visibleAddTask, setVisibleAddTask] = useState(false);
  const [visibleEditTask, setVisibleEditTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStart, setTaskStart] = useState("");
  const [taskEnd, setTaskEnd] = useState("");
  const [currentTask, setCurrentTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editStart, setEditStart] = useState("");
  const [editEnd, setEditEnd] = useState("");

  const addTask = () => {
    const newTasks = {
      ...tasks,
      [selectedDate]: [
        ...(tasks[selectedDate] || []),
        {
          id: selectedDate,
          title: taskTitle,
          description: taskDescription,
          startTime: taskStart,
          endTime: taskEnd,
          completed: false,
        },
      ],
    };
    setTasks(newTasks);
    setTaskTitle("");
    setTaskDescription("");
    setTaskStart("");
    setTaskEnd("");
    hideAddTaskModal();
  };

  const updateTask = () => {
    if (tasks[selectedDate] && tasks[selectedDate][currentTask]) {
      const updatedTasks = { ...tasks };
      const updatedTask = {
        ...updatedTasks[selectedDate][currentTask],
        title: editTitle,
        description: editDescription,
        startTime: editStart,
        endTime: editEnd,
      };

      updatedTasks[selectedDate][currentTask] = updatedTask;
      setTasks(updatedTasks);
      hideEditTaskModal();
    }
  };

  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY/MM/DD"
  );

  const showAddTaskModal = () => setVisibleAddTask(true);
  const hideAddTaskModal = () => setVisibleAddTask(false);

  const showEditTaskModal = (index) => {
    setCurrentTask(index);
    const taskToEdit = tasks[selectedDate][index];
    setEditTitle(taskToEdit.title);
    setVisibleEditTask(true);
  };
  const hideEditTaskModal = () => setVisibleEditTask(false);

  return (
    <View style={{ flex: 1 }}>
      <DatePicker
        options={{
          backgroundColor: "#FFFFFF",
          textHeaderColor: "#000000",
          textDefaultColor: "#000000",
          selectedTextColor: "#fff",
          mainColor: "#F4722B",
          textSecondaryColor: "#959494",
          borderColor: "rgba(122, 146, 165, 0.1)",
        }}
        current={startDate}
        selected={startDate}
        mode="calendar"
        minuteInterval={30}
        style={{ borderRadius: 10 }}
        onSelectedChange={(date) => setSelectedDate(date)}
      />
      <ScrollView>
        <View>
          {tasks[selectedDate] &&
            tasks[selectedDate].map((task, index) => (
              <View key={index} style={styles.taskContainer}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.taskInput}> {task.title} </Text>
                  <Text> {task.description} </Text>
                  <Text>
                    {" "}
                    {task.startTime} {"-"} {task.endTime}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    const newTasks = { ...tasks };
                    newTasks[selectedDate][index].completed =
                      !newTasks[selectedDate][index].completed;
                    setTasks(newTasks);
                  }}
                  style={[
                    styles.circleButton,
                    task.completed && styles.circleButtonPressed,
                  ]}
                />
{/* 
                <TouchableOpacity onPress={() => showEditTaskModal(index)}>
                  <Image
                    source={require("./assets/8666681_edit_icon.png")}
                    style={styles.editButton}
                  />
                </TouchableOpacity> */}
              </View>
            ))}
        </View>
      </ScrollView>
      <Button title="Add Task" onPress={showAddTaskModal} color="#F4722B" />
      <Modal visible={visibleAddTask} animationType="slide">
        <View style={styles.container}>
          <View style={styles.task}>
            <TextInput
              placeholder="Task"
              value={taskTitle}
              onChangeText={setTaskTitle}
            />
          </View>
          <View style={styles.description}>
            <TextInput
              placeholder="Description"
              value={taskDescription}
              onChangeText={setTaskDescription}
            />
          </View>
          <View style={styles.task}>
            <TextInput
              placeholder="Start"
              value={taskStart}
              onChangeText={setTaskStart}
            />
          </View>
          <View style={styles.task}>
            <TextInput
              placeholder="End"
              value={taskEnd}
              onChangeText={setTaskEnd}
            />
          </View>
          <Button title="Submit" onPress={addTask} color="#F4722B" />
        </View>
        <Button title="Done" onPress={hideAddTaskModal} color="#F4722B" />
      </Modal>

      <Modal visible={visibleEditTask}>
        <View style={styles.container}>
          <View style={styles.task}>
            <TextInput
              placeholder={
                tasks[selectedDate]?.[currentTask]?.title || "Enter new title"
              }
              value={editTitle}
              onChangeText={(text) => setEditTitle(text)}
            />
          </View>
          <View style={styles.description}>
            <TextInput
              placeholder={
                tasks[selectedDate]?.[currentTask]?.description ||
                "Enter new description"
              }
              value={editDescription}
              onChangeText={(text) => setEditDescription(text)}
            />
          </View>
          <View style={styles.task}>
            <TextInput
              placeholder={
                tasks[selectedDate]?.[currentTask]?.startTime || "Start time"
              }
              value={editStart}
              onChangeText={(text) => setEditStart(text)}
            />
          </View>
          <View style={styles.task}>
            <TextInput
              placeholder={
                tasks[selectedDate]?.[currentTask]?.endTime || "End time"
              }
              value={editEnd}
              onChangeText={(text) => setEditEnd(text)}
            />
          </View>
          <Button title="Submit Edit" onPress={updateTask} color="#F4722B" />
        </View>
        <Button title="Back" onPress={hideEditTaskModal} color="#F4722B" />
      </Modal>
    </View>
  );
};

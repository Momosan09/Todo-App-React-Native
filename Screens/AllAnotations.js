import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native"; /*1*/
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";

/*Personals*/
import Task from "../components/Task";
import DateCard from "../components/DateCard";

export default function AllAnotations() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [dates, setDates] = useState("Some day");

  const handleAddTask = () => {
    if(!task){
      console.log("\n");
      console.log("AllAnotations");
      console.log("El campo esta vacio - linea 93");
      console.log("Crea este log - linea 25");

    }
    else{
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
  };

  /*   Delete task */
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  /*Dias*/
  useEffect(() => {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    setDates(date + "/" + month + "/" + year);
  }, []);

/*   const navigation = useNavigation(); /*1*/ 

  return (
    <View style={styles.container}>
{/*       <TouchableOpacity
        onPress={() => navigation.navigate("Tags")}>
      </TouchableOpacity> */}
      {/*Titulos*/}
      {/*       <View style={styles.Lista}>
        <Text style={styles.Titles}>Unclasifiqued</Text>
        <Text style={styles.Titles}>All Anotations</Text>
        <Text style={styles.Titles}>Classes</Text>
      </View> */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Dias */}
        <DateCard date={dates} onChangeDate={(dates) => setTask(dates)} />

        {/*Tareas*/}
        <View style={styles.tareas}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
          <View></View>
        </View>
      </ScrollView>

      {/*Escribir tareas*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.AgregarTarea}
      >
        <TextInput
          style={styles.inputTask}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.AddTask}>
            <Text style={styles.AddText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E6ED",
    /*     alignItems: 'center',
    justifyContent: 'center', */
  },
  header: {
    marginTop: 50,
    backgroundColor: "#ddd",
    height: 100,
    width: 122,
  },
  Lista: {
    padding: 25,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  Titles: {
    fontWeight: "bold",
  },
  tareas: {},
  AgregarTarea: {
    padding: 2,
    position: "absolute",
    bottom: 10,
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  AddTask: {
    height: 50,
    width: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#e59840",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#d38226",
    borderWidth: 1,
  },
  inputTask: {
    backgroundColor: "#fff",
    padding: 10,
    height: 50,
    width: 300,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  AddText: {
    color: "#ffff",
  },
});

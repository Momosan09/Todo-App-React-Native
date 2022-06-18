import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  const [currentDate, setcurrentDate] = useState("");

  useEffect(() => {
    /*       let date = new Date().getDate()
      let month = new Date().getMonth() + 1
      let year = new Date().getFullYear() */
    let hours = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    setcurrentDate(hours + ":" + min + ":" + sec);
  }, []);

  return (
    <View style={styles.TaskContainer}>
      <View style={styles.item}>
        <View style={styles.itemIzquierda}>
          <View style={styles.checkRoto}>
            <TouchableOpacity style={styles.checkStyle} />
          </View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>

        <TouchableOpacity style={styles.TareaClaseStyleItem} />
      </View>
      <View style={styles.taskDateContainer}>
        <View style={styles.taskDate}>
          <Text>{currentDate}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TaskContainer: {
    padding: 5,
    marginHorizontal: 10,
  },
  item: {
    //padding: 10,
    backgroundColor: "#efefef",
    borderColor: "#bfbab5",
    borderWidth: 1,
    /*     borderRadius: 20, */
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,

    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemIzquierda: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    height:"100%",


  },
  checkRoto: {

    backgroundColor: "#aaaa",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    minHeight:30,
    height:"100%",
    width: 30,
    padding: 5,
  },
  itemText: {
    paddingHorizontal: 10,
    maxWidth: "80%",
  },
  checkStyle: {},
  TareaClaseStyle: {
    height: "100%",
  },
  TareaClaseStyleItem: {
    height: "100%",
    width: 5,
    marginRight: 10,
    backgroundColor: "#79b733",
  },
  taskDateContainer: {
    alignItems: "flex-end",
  },
  taskDate: {
    backgroundColor: "#efefef",
    borderColor: "#bfbab5",
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    width: 90,
  },
});

export default Task;

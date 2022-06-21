import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard } from "react-native";

import Tags from "./Tag";

const createTag = () =>{
    
        <Text>Helloo</Text>

}

const YourTags = (props) => {
  return (
    <View>
      <View style={styles.World}>
        <TouchableOpacity style={styles.YourTagsContainer}>
          <Text style={styles.Header}>Your Tags</Text>
          <View>
            <Tags></Tags>
            <Tags></Tags>
            <Tags></Tags>
            <Tags></Tags>
          </View>
          <View>
            <Text style={styles.Header}>Create Tag</Text>
                <TextInput placeholder="Nombre" value={tags}></TextInput>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  World: {
    padding: 10,
  },
  YourTagsContainer: {
    backgroundColor: "#dee2ed",
    borderRadius:10,
    borderColor:"#9dafea",
    borderWidth:1,
    width: "100%",
    alignItems: "center",
  },
  Header: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default YourTags;

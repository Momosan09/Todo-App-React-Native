import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import Tags from "./Tag";
import PickColor from "./PickColor";

const YourTags = (props) => {
  const [tags, setTags] = useState();
  const [tagsItems, setTagsItems] = useState([]);

  const handleAddTag = () => {
    if (!tags) {
      console.log("\n");
      console.log("YourTags");
      console.log("El campo esta vacio - linea 49");
      console.log("Crea este log - linea 18");
    } else {
      setTagsItems([...tagsItems, tags]);
      setTags(null);
    }
  };

  return (
    <View>
      <View style={styles.World}>
        <TouchableOpacity style={styles.YourTagsContainer}>
          <Text style={styles.Header}>Your Tags</Text>
          <View>
            {/* TAGS */}
            {tagsItems.map((item, index) => {
              return <Tags key={index} text={item} />;
            })}
          </View>
          {/* Agregar tag */}
          <View>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.AgregarTarea}
            >
              <Text style={styles.Header}>Create Tag</Text>
              <TextInput
                style={styles.addTagTextInput}
                placeholder={"Nombre"}
                value={tags}
                onChangeText={(text) => setTags(text)}
              ></TextInput>
              <PickColor />
              <View>
                <TouchableOpacity
                  style={styles.addTagButton}
                  onPress={() => handleAddTag()}
                >
                  <Text style={styles.addTagButtonText}>+</Text>
                </TouchableOpacity>
                {/* boton agregar tag */}
              </View>
            </KeyboardAvoidingView>
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
    borderRadius: 10,
    borderColor: "#9dafea",
    borderWidth: 1,
    width: "100%",
    alignItems: "center",
  },
  Header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  addTagButton: {
    width: 20,
    height: 20,
    backgroundColor: "#000000",

    alignItems: "center",
  },
  addTagButtonText: {
    color: "#fcfcfc",
  },
  addTagTextInput: {
    padding: 2,
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 5,
  },
});

export default YourTags;

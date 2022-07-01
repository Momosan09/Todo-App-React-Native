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

const YourTags = (props) => {
  const [tags, setTags] = useState();
  const [tagsItems, setTagsItems] = useState([]);

  const handleAddTag = () => {
    setTagsItems([...tagsItems, tags]);
    setTags(null);
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
                placeholder={"Nombre"}
                value={tags}
                onChangeText={(text) => setTags(text)}
              ></TextInput>
              <View>
                <TouchableOpacity onPress={() => handleAddTag()}>
                  <Text>+</Text>
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
});

export default YourTags;

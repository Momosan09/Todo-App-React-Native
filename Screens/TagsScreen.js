import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; /*1*/


import YourTags from "../components/YourTags";


export default function TagsScreen() {
  
  return (
    <View>
      <View style={styles.HeaderContainer}>
        <Text style={styles.Header}>Tags</Text>
      </View>
      <YourTags />
      <View style={styles.HeaderContainer}>
        <Text style={styles.Header}>Statics</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    alignItems: "center",
  },
  Header: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

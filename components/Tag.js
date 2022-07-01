import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Tags = (props)=>{
    return(
        <View>
            <Text>{props.text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({

});

export default Tags;
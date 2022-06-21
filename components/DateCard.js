import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";



const DateCard = (props) =>{


    return(
        <View style={styles.CardDateContainer}>
        <View style={styles.CardDate}>
            <Text>{props.date}</Text>
        </View>
        </View>


    );

};

const styles = StyleSheet.create({
    CardDateContainer:{
        alignItems:"center",
    },
    CardDate:{
        alignItems:"center",
        height: 20,
        width:100,
/*         backgroundColor:"#33f3", */
        backgroundColor:"#2f4d",
        borderRadius:5,
    },



});

export default DateCard;
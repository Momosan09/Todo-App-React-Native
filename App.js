import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenStack } from "react-native-screens";
import { View, Text } from "react-native";

/*Personals*/
import AllAnotations from "./Screens/AllAnotations";
import TagsScreen from "./Screens/TagsScreen";
import FilterData from "./Screens/FilterData";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Order" component={FilterData} />
          <Tab.Screen name="Home" component={AllAnotations} />
          <Tab.Screen name="Tags" component={TagsScreen} />
        </Tab.Navigator>
      </NavigationContainer>




  );
}

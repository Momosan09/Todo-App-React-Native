import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";

let all = "All",
    purple = "Purple",
    green = "Green",
    text = "sape";

const listTab = [
  {
    status: all,
  },
  {
    status: purple,
  },
  {
    status: green,
  },
];

const data = [
  {
    name: text,
    status: "Green",
  },
  {
    name: "ABBA",
    status: "Purple",
  },
  {
    name: "BBAA",
    status: "Green",
  },
];
const FilterData = () => {
  const [status, setStatus] = useState("All");
  const [datalist, setDataList] = useState(data);

  const setStatusFilter = (status) => {
    if (status !== "All") {
      setDataList([...data.filter((e) => e.status === status)]);
    } else {
      setDataList(data);
    }
    setStatus(status);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.itemsPerTag}>
        <Text>{item.name}</Text>
        <View style={styles.tagLogo}></View>
        <View
          style={[
            styles.tagColor,
            {
              backgroundColor: item.status == "Purple" ? "#e5848e" : "#69c080",
            },
          ]}
        />
      </View>
    );
  };

  const separator = () => {
    return <View style={{ height: 1, backgroundColor: "#f1f1f1" }} />;
  };

  return (
    <SafeAreaView style={styles.World}>
      <View style={styles.listTab}>
        {listTab.map((e) => (
          <TouchableOpacity
            style={[styles.btnTags, status == e.status && styles.btnTagsActive]}
            onPress={() => setStatusFilter(e.status)}
          >
            <Text
              style={[
                styles.textTags,
                status === e.status && styles.textTagsActive,
              ]}
            >
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={datalist}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  World: {
    flex: 1,
    backgroundColor: "#E8E6ED",

    /*     alignItems: 'center',
    justifyContent: 'center', */
  },
  listTab: {
    flexDirection: "row",
    alignSelf: "center",
  },
  btnTags: {
    width: "33%",
    height: 25,
    padding: 5,
    backgroundColor: "#2cecec",
    alignItems: "center",
  },
  btnTagsActive: {
    backgroundColor: "#fff",
  },
  textTags: {
    /*     color:"#000", */
  },
  textTagsActive: {
    color: "#cc6f1e",
  },
  itemsPerTag: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  tagLogo: {
    backgroundColor: "#fff",
  },
  tagColor: {
    width: "50%",
    height: "50%",
  },
});

export default FilterData;

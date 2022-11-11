import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const ItemList = ({ item, onHandlePressCompleted, onHandlePressTask }) => {
  return (
    <View
      style={[
        styles.itemList,
        item.isCompleted
          ? { backgroundColor: "#d8fd94" }
          : { backgroundColor: "#fe9d97" },
      ]}
    >
      <View style={styles.btnItemList}>
        <TouchableOpacity
          style={styles.btnCompleted}
          onPress={() => onHandlePressCompleted(item)}
        >
          {item.isCompleted ? (
            <MaterialIcons name="check-box" size={20} color="#2a2a2a" />
          ) : (
            <MaterialIcons
              name="indeterminate-check-box"
              size={20}
              color="#2a2a2a"
            />
          )}
        </TouchableOpacity>
        <Text style={[styles.itemText, item.isCompleted && styles.completed]}>
          {item.value}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btnDelete}
        onPress={() => onHandlePressTask(item)}
      >
        <MaterialCommunityIcons
          name="delete-forever"
          size={20}
          color="#2a2a2a"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ItemList;

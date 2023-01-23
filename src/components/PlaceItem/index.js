import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const PlaceItem = ({ address, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.adress}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;

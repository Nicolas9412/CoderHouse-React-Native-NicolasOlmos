import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const PlaceItem = ({ id, title, image, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;

import React from "react";
import { styles } from "./styles";
import { View, TextInput, Button } from "react-native";

const AddItem = ({ task, onHandleChange, onHandleTask }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={task}
        onChangeText={onHandleChange}
        style={styles.inputText}
        placeholder="Enter task"
      />
      <Button
        disabled={!task}
        title="Add"
        color="#59554e"
        onPress={onHandleTask}
      />
    </View>
  );
};

export default AddItem;

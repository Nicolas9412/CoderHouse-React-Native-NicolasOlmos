import React from "react";
import { styles } from "./styles";
import { View, Text, FlatList } from "react-native";

const TaskList = ({ taskList, renderItem }) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.titleList}>To do list</Text>
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TaskList;

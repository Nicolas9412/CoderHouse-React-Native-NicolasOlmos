import { useState } from "react";
import { View } from "react-native";
import { AddItem, ItemList, ListTask, ModalTask } from "./components";
import { styles } from "./styles";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandleTask = () => {
    setTaskList((taskList) => [
      { id: Math.random().toString(), value: task, isCompleted: false },
      ...taskList,
    ]);
    setTask("");
  };

  const onHandleChange = (text) => setTask(text);

  const onHandlePressTask = (task) => {
    setModalVisible(!modalVisible);
    setSelectedTask(task);
  };

  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
  };

  const onHandleDeleteItem = () => {
    setModalVisible(!modalVisible);
    setTaskList((taskList) =>
      taskList.filter((item) => item.id !== selectedTask.id)
    );
  };

  const onHandlePressCompleted = (task) => {
    setTaskList((taskList) => taskList.filter((item) => item.id !== task.id));
    setTaskList((taskList) => [
      ...taskList,
      { ...task, isCompleted: task.isCompleted ? false : true },
    ]);
    setTaskList((taskList) =>
      taskList.sort((x, y) => Number(x.isCompleted) - Number(y.isCompleted))
    );
  };

  const renderItem = ({ item }) => (
    <ItemList
      item={item}
      onHandlePressCompleted={onHandlePressCompleted}
      onHandlePressTask={onHandlePressTask}
    />
  );
  return (
    <View style={styles.container}>
      <AddItem
        task={task}
        onHandleChange={onHandleChange}
        onHandleTask={onHandleTask}
      />
      <ListTask taskList={taskList} renderItem={renderItem} />
      <ModalTask
        modalVisible={modalVisible}
        selectedTask={selectedTask}
        onHandleCancel={onHandleCancel}
        onHandleDeleteItem={onHandleDeleteItem}
      />
    </View>
  );
}

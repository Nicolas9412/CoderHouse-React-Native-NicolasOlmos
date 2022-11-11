import React from "react";
import { styles } from "./styles";
import { Modal, View, Text, Button } from "react-native";

const ModalTask = ({
  modalVisible,
  selectedTask,
  onHandleCancel,
  onHandleDeleteItem,
}) => {
  return (
    <Modal visible={modalVisible} animationType="fade">
      <View style={styles.modalContainer}>
        <Text style={styles.titleModal}>Task Detail</Text>
        <Text style={styles.questionModal}>Are you sure delete this task?</Text>
        <Text style={styles.taskValueModal}>{selectedTask?.value}</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.btnCancelModal}>
            <Button title="Cancel" color={"#CC0202"} onPress={onHandleCancel} />
          </View>
          <View>
            <Button
              title="Delete"
              color="#0099cc"
              onPress={onHandleDeleteItem}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalTask;

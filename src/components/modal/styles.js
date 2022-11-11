import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 50,
    paddingHorizontal: 30,
  },
  titleModal: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  questionModal: {
    fontSize: 16,
    marginBottom: 10,
  },
  taskValueModal: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    marginHorizontal: 15,
    marginBottom: 15,
  },
  btnCancelModal: {
    marginRight: 20,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

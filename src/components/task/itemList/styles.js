import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemList: {
    width: "90%",
    marginHorizontal: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fcebb6",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    fontSize: 14,
  },
  btnItemList: {
    flexDirection: "row",
  },
  itemText: {
    width: "80%",
    textAlign: "justify",
  },
  completed: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  btnCompleted: {
    marginRight: 10,
  },
});

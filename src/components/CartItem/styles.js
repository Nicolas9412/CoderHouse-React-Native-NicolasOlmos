import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  header: {
    fontSize: 18,
    fontFamily: "OpenSans-Bold",
  },
  detail: {
    padding: 8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontFamily: "OpenSans-Regular",
  },
});

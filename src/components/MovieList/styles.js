import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    width: "85%",
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  title: {
    width: "85%",
    fontSize: 16,
    fontFamily: "OpenSans-SemiBold",
    color: "#FFF",
    marginLeft: 10,
    textTransform: "capitalize",
  },
  number: {
    fontSize: 16,
    fontFamily: "OpenSans-SemiBold",
    color: "#FFF",
    marginLeft: 10,
    textTransform: "uppercase",
  },
});

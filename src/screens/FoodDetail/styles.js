import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "OpenSans-Italic",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontFamily: "OpenSans-Bold",
    marginBottom: 10,
  },
});

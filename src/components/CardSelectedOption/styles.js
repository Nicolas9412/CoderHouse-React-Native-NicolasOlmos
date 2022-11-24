import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAE8E0",
    padding: 20,
    borderRadius: 5,
    marginTop: 30,
  },
  title: { fontSize: 16, fontFamily: "Montserrat-Bold" },
  optionImage: { marginTop: 10, width: 50, height: 50 },
  optionTitle: { marginTop: 5, fontSize: 14, fontFamily: "Montserrat-Italic" },
  buttonStart: { marginTop: 10 },
});

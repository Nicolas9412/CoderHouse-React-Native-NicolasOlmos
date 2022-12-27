import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    maxWidth: 400,
    minHeight: 320,
    padding: 15,
    margin: 15,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 18,
    fontFamily: "OpenSans-Bold",
    marginVertical: 5,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontFamily: "OpenSans-Regular",
    marginVertical: 5,
  },
  prompt: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  promptButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  promptMessage: {
    fontSize: 14,
    color: COLORS.text,
    fontFamily: "OpenSans-Regular",
  },
});

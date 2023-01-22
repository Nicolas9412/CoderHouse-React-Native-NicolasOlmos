import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
  },
  label: {
    fontFamily: "OpenSans-Bold",
    fontSize: 18,
    marginBottom: 15,
  },
});

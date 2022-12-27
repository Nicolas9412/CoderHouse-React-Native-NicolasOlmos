import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: "OpenSans-Regular",
    marginVertical: 5,
    color: COLORS.text,
  },
  subLabel: {
    fontSize: 12,
    fontFamily: "OpenSans-Regular",
    marginVertical: 5,
    color: COLORS.gray,
  },
});

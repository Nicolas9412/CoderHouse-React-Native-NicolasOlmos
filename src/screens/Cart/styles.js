import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: COLORS.white,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: COLORS.gray,
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnDisabled: {
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    fontFamily: "OpenSans-Bold",
    padding: 8,
  },
});

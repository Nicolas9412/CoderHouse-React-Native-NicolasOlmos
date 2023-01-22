import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "40%",
    minHeight: 300,
    width: "100%",
  },
  location: {
    margin: 20,
    width: "90%",
    maxWidth: 350,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  adress: {
    color: COLORS.primary,
    textAlign: "center",
  },
});

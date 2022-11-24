import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAE8E0",
    padding: 20,
    borderRadius: 5,
    marginTop: 30,
  },
  choosePlayersContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
  },
  vsTitle: {
    fontSize: 14,
    fontFamily: "Montserrat-Bold",
  },
  optionImage: {
    width: 60,
    height: 60,
  },
});

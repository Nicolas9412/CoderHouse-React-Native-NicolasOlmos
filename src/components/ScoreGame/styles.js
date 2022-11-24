import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scoreContainer: {
    flexDirection: "row",
    width: "100%",
  },
  player1Container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 45,
  },
  player1Name: {
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
    marginRight: 15,
  },
  player1Score: {
    fontSize: 14,
    fontFamily: "Montserrat-Bold",
    padding: 5,
    backgroundColor: "#EF7C8E",
    marginLeft: 5,
    borderRadius: 3,
  },
  player2Container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
  },
  player2Score: {
    fontSize: 14,
    fontFamily: "Montserrat-Bold",
    padding: 5,
    backgroundColor: "#EF7C8E",
    marginRight: 15,
    borderRadius: 3,
  },
  player2Name: {
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
  },
});

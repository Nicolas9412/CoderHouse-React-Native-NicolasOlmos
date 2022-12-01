import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D2D2D",
    flex: 1,
  },
  list: {
    marginTop: 10,
    marginLeft: 20,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 300,
  },
  titleMovie: {
    width: "80%",
    fontSize: 18,
    fontFamily: "OpenSans-Italic",
    color: "#FFF",
    marginTop: 20,
    marginLeft: 25,
  },
  descriptionContainer: {
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 15,
    marginHorizontal: "10%",
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify",
  },
  descriptionText: {
    fontSize: 14,
    color: "#FFF",
    width: "90%",
    fontFamily: "OpenSans-Regular",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginHorizontal: "10%",
  },
  statContainer: {
    flexDirection: "column",
    width: "40%",
    marginBottom: 20,
  },
  statsTitle: { fontSize: 18, fontFamily: "OpenSans-Bold", color: "#FFF" },
  statsText: { fontSize: 16, fontFamily: "OpenSans-Regular", color: "#FFF" },
});

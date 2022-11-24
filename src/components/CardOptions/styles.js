import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  chooseOptionsContainer: {
    width: "80%",
    paddingBottom: 30,
    marginTop: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAE8E0",
    borderRadius: 5,
  },
  chooseOptionsTitle: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    marginVertical: 15,
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imageContainer: {
    padding: 10,
  },
  optionImage: {
    width: 60,
    height: 60,
  },
  imageSeleted: {
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "rgba(161,155,183,1)",
    borderRadius: 3,
    padding: 5,
  },
  btnContainer: {
    marginTop: 20,
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
  },
});

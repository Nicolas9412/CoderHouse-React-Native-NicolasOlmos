import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import { styles } from "./styles";

const CardOptions = ({
  option,
  onHandleSeletedOption,
  onHandleRestart,
  onHandleConfirm,
}) => {
  return (
    <View style={styles.chooseOptionsContainer}>
      <Text style={styles.chooseOptionsTitle}>Choose option</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={
            option == "rock"
              ? [styles.imageSeleted, styles.imageContainer]
              : [styles.imageContainer]
          }
          onPress={() => onHandleSeletedOption("rock")}
        >
          <Image
            style={styles.optionImage}
            source={require("../../../assets/rock.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            option == "paper"
              ? [styles.imageSeleted, styles.imageContainer]
              : [styles.imageContainer]
          }
          onPress={() => onHandleSeletedOption("paper")}
        >
          <Image
            style={styles.optionImage}
            source={require("../../../assets/paper.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            option == "scissors"
              ? [styles.imageSeleted, styles.imageContainer]
              : [styles.imageContainer]
          }
          onPress={() => onHandleSeletedOption("scissors")}
        >
          <Image
            style={styles.optionImage}
            source={require("../../../assets/scissors.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <Button
          color={"#B6E2D3"}
          title="restart"
          onPress={() => onHandleRestart()}
        />
        <Button
          color={"#B6E2D3"}
          title="confirm"
          onPress={() => onHandleConfirm()}
        />
      </View>
    </View>
  );
};

export default CardOptions;

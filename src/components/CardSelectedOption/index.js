import { styles } from "./styles";
import { View, Text, Image, Button } from "react-native";
import selectedImage from "../../utils/selectedImage";

const CardSelectedOption = ({ selectedOption, onHandleStartGame }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Option selected</Text>
      <Image
        style={styles.optionImage}
        source={selectedImage(selectedOption)}
      />
      <Text style={styles.optionTitle}>{selectedOption}</Text>
      <View style={styles.buttonStart}>
        <Button
          color={"#B6E2D3"}
          title={"Start Game"}
          onPress={() => onHandleStartGame(selectedOption)}
        />
      </View>
    </View>
  );
};

export default CardSelectedOption;

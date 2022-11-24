import { styles } from "./styles";
import { View, Text } from "react-native";

const StickerResultPartial = ({ result }) => {
  let resultText = "";
  if (result == "you") {
    resultText = "¡ Win's play !";
  } else if (result == "computer") {
    resultText = "¡ Win's computer !";
  } else {
    resultText = "¡ Tie !";
  }
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.textResult}>{resultText}</Text>
    </View>
  );
};

export default StickerResultPartial;

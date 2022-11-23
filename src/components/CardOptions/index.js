import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const CardOptions = () => {
  return (
    <View style={styles.chooseOptionsContainer}>
      <Text style={styles.chooseOptionsTitle}>Choose option</Text>
      <View style={styles.optionsContainer}>
        <Image
          style={styles.optionImage}
          source={require("../../../assets/rock.png")}
        />
        <Image
          style={styles.optionImage}
          source={require("../../../assets/paper.png")}
        />
        <Image
          style={styles.optionImage}
          source={require("../../../assets/scissors.png")}
        />
      </View>
    </View>
  );
};

export default CardOptions;

import { View, Text } from "react-native";
import { styles } from "./styles";

const Button = ({ title }) => {
  return (
    <View style={styles.startButtonContainer}>
      <Text style={styles.startButton}>{title}</Text>
    </View>
  );
};

export default Button;

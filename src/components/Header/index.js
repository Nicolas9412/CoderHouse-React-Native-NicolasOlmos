import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

const Header = ({ title }) => {
  return (
    <LinearGradient
      colors={["#DB0000", "rgba(255, 0, 0, 0)"]}
      style={styles.container}
    >
      <Text style={styles.text}>{title}</Text>
    </LinearGradient>
  );
};

export default Header;

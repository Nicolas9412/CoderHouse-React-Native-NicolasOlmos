import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

const ItemList = ({ title, index, onHandleCategory }) => {
  return (
    <TouchableOpacity onPress={() => onHandleCategory(title)}>
      <LinearGradient
        colors={[
          "rgba(255, 0, 0, 0.46)",
          "rgba(199, 0, 0, 0.46)",
          "rgba(0, 0, 0, 0.46)",
        ]}
        style={styles.container}
      >
        <Text style={styles.number}>
          {index < 9 && 0}
          {index + 1}
        </Text>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ItemList;

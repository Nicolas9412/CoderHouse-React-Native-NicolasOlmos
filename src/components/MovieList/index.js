import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

const MovieList = ({ item, index, onHandleMovie }) => {
  return (
    <TouchableOpacity onPress={() => onHandleMovie(item)}>
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
        <Text style={styles.title}>{item.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MovieList;

import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const GridItem = ({ item, onSelect }) => {
  return (
    <View style={{ ...styles.gridItem, backgroundColor: item.color }}>
      <TouchableOpacity style={styles.container} onPress={() => onSelect(item)}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GridItem;

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const FoodItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onSelected(item);
      }}
    >
      <View style={styles.foodItem}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <Text style={styles.detail}>Price: {item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodItem;

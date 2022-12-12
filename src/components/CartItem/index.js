import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>{item.title}</Text>
      </View>
      <View style={styles.detail}>
        <View>
          <Text style={styles.text}>cantidad: {item.quantity}</Text>
          <Text style={styles.text}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={30} color={COLORS.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

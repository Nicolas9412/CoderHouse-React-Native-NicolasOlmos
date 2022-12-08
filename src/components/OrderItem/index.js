import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { COLORS } from "../../constants/colors";

const OrderItem = ({ item, onDelete }) => {
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };
  return (
    <View style={styles.order}>
      <View>
        <Text style={styles.date}>{formatDate(item.date)}</Text>
        <Text style={styles.total}>${item.total}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onDelete(item)}>
          <Ionicons name="trash" size={30} color={COLORS.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
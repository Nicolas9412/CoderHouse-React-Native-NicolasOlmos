import { View, Text } from "react-native";
import { styles } from "./styles";

const CartItem = ({ item}) => {
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
      </View>
    </View>
  );
};

export default CartItem;

import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { CART } from "../../data";
import { styles } from "./styles";
import { CartItem } from "../../components";

const Cart = () => {
  const total = 95;

  const handleDelete = (item) => {
    console.log("Food deleted");
  };

  const handleConfirm = () => {
    console.log("Order confirm");
  };

  const renderItemCart = ({ item }) => (
    <CartItem item={item} onDelete={handleDelete} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={CART}
          keyExtractor={(item) => item.id}
          renderItem={renderItemCart}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.confirm}
          onPress={() => handleConfirm()}
        >
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

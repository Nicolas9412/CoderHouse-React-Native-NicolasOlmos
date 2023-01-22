import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { CartItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, confirmCart } from "../../store/actions/cart.action";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const place = useSelector((state)=> state.place.place);
  const dispatch = useDispatch();

  const onHandleDelete = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const onCreateOrder = () => {
    dispatch(confirmCart(cart,place, total));
  };

  const renderItemCart = ({ item }) => (
    <CartItem item={item} onDelete={onHandleDelete} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItemCart}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          disabled={cart.length === 0 || place == null}
          style={cart.length === 0 || place == null? styles.btnDisabled : styles.confirm}
          onPress={() => onCreateOrder()}
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

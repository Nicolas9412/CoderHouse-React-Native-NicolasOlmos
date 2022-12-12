import { Text, View, Image, Button } from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import { COLORS } from "../../constants/colors";

const FoodDetail = () => {
  const food = useSelector((state) => state.products.selected);
  const dispatch = useDispatch();
  const onAddToCart = () => dispatch(addToCart(food));
  return (
    <View style={styles.container}>
      <Image source={food.photo} style={styles.photo} />
      <Text style={styles.title}>{food.title}</Text>
      <Text style={styles.price}>Price: {food.price}</Text>
      <Button title="Add to cart" color={COLORS.primary} onPress={onAddToCart}/>
    </View>
  );
};

export default FoodDetail;

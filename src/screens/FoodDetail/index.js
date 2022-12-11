import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const FoodDetail = () => {
  const food = useSelector((state) => state.products.selected);
  return (
    <View style={styles.container}>
      <Image source={food.photo} style={styles.photo} />
      <Text style={styles.title}>{food.title}</Text>
      <Text style={styles.price}>Price: {food.price}</Text>
    </View>
  );
};

export default FoodDetail;

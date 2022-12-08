import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { FOODS } from "../../data";

const FoodDetail = ({ route }) => {
  const food = FOODS.find((food) => food.id == route.params.foodID);
  return (
    <View style={styles.container}>
      <Image source={food.photo} style={styles.photo} />
      <Text style={styles.title}>{food.title}</Text>
      <Text style={styles.price}>Price: {food.price}</Text>
    </View>
  );
};

export default FoodDetail;

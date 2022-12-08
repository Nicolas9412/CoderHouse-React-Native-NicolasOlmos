import { FlatList } from "react-native";
import { styles } from "./styles";
import { FoodItem } from "../../components";
import { FOODS } from "../../data/foods";

const Foods = ({ navigation, route }) => {
  const foods = FOODS.filter(
    (food) => food.category == route.params.categoryID
  );

  const handleSelectedFood = (item) => {
    navigation.navigate("FoodDetail", { foodID: item.id, name: item.title });
  };
  const renderItemFood = ({ item }) => (
    <FoodItem item={item} onSelected={handleSelectedFood} />
  );
  return (
    <FlatList
      data={foods}
      keyExtractor={(item) => item.id}
      renderItem={renderItemFood}
    />
  );
};

export default Foods;

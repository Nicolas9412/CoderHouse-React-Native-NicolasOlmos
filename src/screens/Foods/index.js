import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FoodItem } from "../../components";
import { useEffect } from "react";
import { selectedProduct, filterProducts } from "../../store/actions";

const Foods = ({ navigation }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.selected);
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, []);

  const handleSelectedFood = (item) => {
    dispatch(selectedProduct(item.id));
    navigation.navigate("FoodDetail", { name: item.title });
  };
  const renderItemFood = ({ item }) => (
    <FoodItem item={item} onSelected={handleSelectedFood} />
  );
  return (
    <FlatList
      data={filteredProducts}
      keyExtractor={(item) => item.id}
      renderItem={renderItemFood}
    />
  );
};

export default Foods;

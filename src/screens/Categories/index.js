import { FlatList } from "react-native";
import { GridItem } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import { selectedCategory } from "../../store/actions";

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id));
    navigation.navigate("Foods", {
      name: item.title,
    });
  };

  const renderGridItem = ({ item }) => {
    return <GridItem item={item} onSelect={handleSelectedCategory} />;
  };
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default Categories;

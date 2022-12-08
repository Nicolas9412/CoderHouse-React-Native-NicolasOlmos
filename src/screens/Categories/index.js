import { FlatList } from "react-native";
import { CATEGORIES } from "../../data";
import { GridItem } from "../../components/index";

const Categories = ({ navigation }) => {
  const handleSelectedCategory = (item) => {
    navigation.navigate("Foods", {
      categoryID: item.id,
      name: item.title,
    });
  };

  const renderGridItem = ({ item }) => {
    return <GridItem item={item} onSelect={handleSelectedCategory} />;
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default Categories;

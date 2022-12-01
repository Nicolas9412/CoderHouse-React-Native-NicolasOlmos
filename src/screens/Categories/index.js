import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { movies } from "../../../data/movies";
import { Header, ItemList } from "../../components";

const Categories = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let categories = new Set();
    movies.forEach((movie) => {
      categories.add(movie.category);
    });
    setCategories(Array.from(categories));
  }, []);

  const onHandleCategory = (title) => {
    navigation.navigate("Movies", { title });
  };

  const renderItem = ({ item, index }) => {
    console.log(item);
    return (
      <ItemList
        title={item}
        index={index}
        onHandleCategory={onHandleCategory}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Header title={"Table of contents"} />
      <FlatList
        style={styles.list}
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Categories;

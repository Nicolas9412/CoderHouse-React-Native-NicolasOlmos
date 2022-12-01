import { FlatList, View } from "react-native";
import { Header, MovieList } from "../../components";
import { styles } from "./styles";
import { movies as jsonMovies } from "../../../data/movies";
import { useState, useEffect } from "react";

const Movies = ({ navigation, route }) => {
  const { title } = route.params;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(jsonMovies.filter((movie) => movie.category == title));
  }, []);

  const onHandleMovie = (item) => {
    navigation.navigate("Movie", { item });
  };

  const renderItem = ({ item, index }) => {
    return (
      <MovieList item={item} index={index} onHandleMovie={onHandleMovie} />
    );
  };

  return (
    <View style={styles.container}>
      <Header title={`${title} movies`} />
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default Movies;

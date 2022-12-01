import { View, Image, Text } from "react-native";
import { Header } from "../../components";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

const Movie = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <View style={styles.container}>
      <Header title={item.title} />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/icon.png")}
        />
      </View>
      <View>
        <Text style={styles.titleMovie}>{item.title}</Text>
      </View>
      <LinearGradient
        colors={[
          "rgba(255, 0, 0, 0.46)",
          "rgba(199, 0, 0, 0.46)",
          "rgba(0, 0, 0, 0.46)",
        ]}
        style={styles.descriptionContainer}
      >
        <Text style={styles.descriptionText}>{item.descripcion}</Text>
      </LinearGradient>
      <View style={styles.statsContainer}>
        <View style={styles.statContainer}>
          <Text style={styles.statsTitle}>Premiere</Text>
          <Text style={styles.statsText}>{item.premiere}</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statsTitle}>Duration</Text>
          <Text style={styles.statsText}>{item.duration} minutes</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statsTitle}>Director</Text>
          <Text style={styles.statsText}>{item.director}</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statsTitle}>Main Cast</Text>
          {item.mainCast.map((actor, index) => (
            <Text key={index} style={styles.statsText}>
              {actor}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Movie;

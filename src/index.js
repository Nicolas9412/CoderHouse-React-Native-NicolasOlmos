import MovieNavigator from "../navigation/MovieNavigator";
import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./styles";

export default function App() {
  const [loaded] = useFonts({
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Light": require("../assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Italic": require("../assets/fonts/OpenSans-Italic.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={"#EF7C8E"} />
      </View>
    );
  }
  return <MovieNavigator />;
}

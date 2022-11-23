import { ActivityIndicator, View } from "react-native";
import { StartGame } from "./screens";
import { styles } from "./styles";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Light": require("../assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Italic": require("../assets/fonts/Montserrat-Italic.ttf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={"#EF7C8E"} />
      </View>
    );
  }

  return (
    <View style={styles.appContainer}>
      <StartGame />
    </View>
  );
}

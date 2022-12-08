import { StatusBar } from "expo-status-bar";
import { Text, View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { useFonts } from "expo-font";
import AppNavigation from "./navigation";

export default function App() {
  const [loaded] = useFonts({
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Italic": require("../assets/fonts/OpenSans-Italic.ttf"),
    "OpenSans-Light": require("../assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#D782BA" size={"large"} />
      </View>
    );
  }

  return <AppNavigation />;
}

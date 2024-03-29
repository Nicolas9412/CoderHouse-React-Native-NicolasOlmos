import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { useFonts } from "expo-font";
import AppNavigation from "./navigation";
import { Provider } from "react-redux";
import store from "./store";
import { init } from "./db";

init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Database fail connect");
    console.log(err.message);
  });


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

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

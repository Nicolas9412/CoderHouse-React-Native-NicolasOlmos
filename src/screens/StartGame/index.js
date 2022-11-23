import { View } from "react-native";
import { styles } from "./styles";
import { Header, CardOptions, Button } from "../../components";

const StartGame = () => {
  return (
    <View style={styles.viewContainer}>
      <Header title={"Welcome"} />
      <CardOptions />
      <Button title={"Start Game"} />
    </View>
  );
};

export default StartGame;

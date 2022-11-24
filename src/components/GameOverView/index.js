import { View, Image, Text, Button } from "react-native";
import { styles } from "./styles";

const GameOverView = ({ restartGame }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageFinish}
        source={require("../../../assets/lose.png")}
      />
      <Text style={styles.titleFinish}>¡ Game over !</Text>
      <Text style={styles.descriptionFinish}>Computer is the winner</Text>
      <Button
        title={"Play Again"}
        color={"#B6E2D3"}
        onPress={() => restartGame()}
      />
    </View>
  );
};

export default GameOverView;

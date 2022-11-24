import { View, Text, Image, Button } from "react-native";
import { styles } from "./styles";

const WinView = ({ restartGame }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageFinish}
        source={require("../../../assets/win.png")}
      />
      <Text style={styles.titleFinish}>¡ Congratulations !</Text>
      <Text style={styles.descriptionFinish}>You are the winner</Text>
      <Button
        title={"Play Again"}
        color={"#B6E2D3"}
        onPress={() => restartGame()}
      />
    </View>
  );
};

export default WinView;

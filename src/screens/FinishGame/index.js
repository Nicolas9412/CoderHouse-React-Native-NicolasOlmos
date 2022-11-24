import { styles } from "./styles";
import { View } from "react-native";
import { Header, WinView, GameOverView } from "../../components";

const FinishGame = ({ winGame, restartGame }) => {
  return (
    <View style={styles.container}>
      <Header title={"Finish Game"} />
      {winGame == "you" ? (
        <WinView restartGame={restartGame} />
      ) : (
        <GameOverView restartGame={restartGame} />
      )}
    </View>
  );
};

export default FinishGame;

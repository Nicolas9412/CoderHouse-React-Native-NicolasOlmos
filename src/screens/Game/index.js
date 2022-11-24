import { styles } from "./styles";
import { Header, CardGame, StickerResultPartial } from "../../components";
import { View, Button } from "react-native";
import { useState } from "react";

const Game = ({
  userOption,
  playAgain,
  you,
  setYou,
  computer,
  setComputer,
  onHandleFinishGame,
}) => {
  const [result, setResult] = useState(null);
  return (
    <View style={styles.container}>
      <Header title="Game" />
      <CardGame
        userOption={userOption}
        you={you}
        setYou={setYou}
        computer={computer}
        setComputer={setComputer}
        setResult={setResult}
      />
      <StickerResultPartial result={result} />
      {you == 2 || computer == 2 ? (
        <Button
          color={"#B6E2D3"}
          title={"Finish Game"}
          onPress={() => onHandleFinishGame()}
        />
      ) : (
        <Button color={"#B6E2D3"} title={"Next"} onPress={() => playAgain()} />
      )}
    </View>
  );
};

export default Game;

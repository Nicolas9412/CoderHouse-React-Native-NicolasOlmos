import { ActivityIndicator, View } from "react-native";
import { StartGame, Game, FinishGame } from "./screens";
import { styles } from "./styles";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [userOption, setUserOption] = useState(null);
  const [winGame, setWinGame] = useState(null);
  const [you, setYou] = useState(0);
  const [computer, setComputer] = useState(0);

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

  const onHandleStartGame = (selectedOption) => {
    setUserOption(selectedOption);
  };

  const playAgain = () => {
    setUserOption(null);
  };

  const onHandleFinishGame = () => {
    if (you > computer) {
      setWinGame("you");
    } else {
      setWinGame("computer");
    }
  };

  const restartGame = () => {
    setUserOption(null);
    setWinGame(null);
    setYou(0);
    setComputer(0);
  };

  let content = <StartGame onHandleStartGame={onHandleStartGame} />;
  if (userOption) {
    content = (
      <Game
        userOption={userOption}
        playAgain={playAgain}
        you={you}
        setYou={setYou}
        computer={computer}
        setComputer={setComputer}
        onHandleFinishGame={onHandleFinishGame}
      />
    );
  }
  if (winGame) {
    content = <FinishGame winGame={winGame} restartGame={restartGame} />;
  }
  return <View style={styles.appContainer}>{content}</View>;
}

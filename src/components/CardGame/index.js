import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import ScoreGame from "../ScoreGame";
import selectedImage from "../../utils/selectedImage";
import randomElementArray from "../../utils/randomElementArray";
import { useState, useEffect } from "react";

const CardGame = ({
  userOption,
  you,
  setYou,
  computer,
  setComputer,
  setResult,
}) => {
  const arrayOptions = ["rock", "paper", "scissors"];
  const [chooseComputer, setChooseComputer] = useState(
    randomElementArray(arrayOptions)
  );

  useEffect(() => {
    if (userOption == "paper" && chooseComputer == "rock") {
      setYou((score) => score + 1);
      setResult("you");
    } else if (userOption == "rock" && chooseComputer == "scissors") {
      setYou((score) => score + 1);
      setResult("you");
    } else if (userOption == "scissors" && chooseComputer == "paper") {
      setYou((score) => score + 1);
      setResult("you");
    } else if (userOption == "paper" && chooseComputer == "scissors") {
      setComputer((score) => score + 1);
      setResult("computer");
    } else if (userOption == "scissors" && chooseComputer == "rock") {
      setComputer((score) => score + 1);
      setResult("computer");
    } else if (userOption == "rock" && chooseComputer == "paper") {
      setComputer((score) => score + 1);
      setResult("computer");
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScoreGame you={you} computer={computer} />
      <View style={styles.choosePlayersContainer}>
        <Image style={styles.optionImage} source={selectedImage(userOption)} />
        <Text style={styles.vsTitle}>VS</Text>
        <Image
          style={styles.optionImage}
          source={selectedImage(chooseComputer)}
        />
      </View>
    </View>
  );
};

export default CardGame;

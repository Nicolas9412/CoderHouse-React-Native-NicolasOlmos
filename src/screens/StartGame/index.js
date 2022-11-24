import { Alert, View, Text } from "react-native";
import { styles } from "./styles";
import { Header, CardOptions, CardSelectedOption } from "../../components";
import { useState } from "react";

const StartGame = ({ onHandleStartGame }) => {
  const [option, setOption] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const onHandleSeletedOption = (option) => {
    setOption(option);
  };
  const onHandleConfirm = () => {
    if (option == null) {
      Alert.alert("Not choose option", "Please selected option", [
        { text: "okay", style: "destructive" },
      ]);
    } else {
      setConfirmed(true);
      setSelectedOption(option);
      setOption(null);
    }
  };
  const onHandleRestart = () => {
    setOption(null);
    setConfirmed(false);
  };

  const confirmedOutput = () =>
    confirmed ? (
      <CardSelectedOption
        selectedOption={selectedOption}
        onHandleStartGame={onHandleStartGame}
      />
    ) : null;

  return (
    <View style={styles.viewContainer}>
      <Header title={"Welcome"} />
      <CardOptions
        option={option}
        onHandleSeletedOption={onHandleSeletedOption}
        onHandleConfirm={onHandleConfirm}
        onHandleRestart={onHandleRestart}
      />
      {confirmedOutput()}
    </View>
  );
};

export default StartGame;

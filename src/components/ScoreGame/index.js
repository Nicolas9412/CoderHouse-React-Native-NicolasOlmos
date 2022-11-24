import { View, Text } from "react-native";
import { styles } from "./styles";

const ScoreGame = ({ you, computer }) => {
  return (
    <View style={styles.scoreContainer}>
      <View style={styles.player1Container}>
        <Text style={styles.player1Name}>You</Text>
        <Text style={styles.player1Score}>{you}</Text>
      </View>
      <View style={styles.player2Container}>
        <Text style={styles.player2Score}>{computer}</Text>
        <Text style={styles.player2Name}>Computer</Text>
      </View>
    </View>
  );
};

export default ScoreGame;

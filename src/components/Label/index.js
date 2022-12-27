import { View, Text } from "react-native";
import { styles } from "./styles";

const index = ({ label, children, style, subLabel, subLabelStyle }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.label, ...style }}>{label}</Text>
      {children}
      {subLabel ? (
        <Text style={{ ...styles.subLabel, ...style }}>{subLabel}</Text>
      ) : null}
    </View>
  );
};

export default index;

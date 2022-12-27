import { View, TextInput, Text } from "react-native";
import { Label } from "../../components";
import { styles } from "./styles";

const Input = ({
  editable,
  children,
  value,
  onChangeText,
  onFocus,
  onBlur,
  maxLenght,
  placeholder,
  placeholderTextColor,
  keyboardType,
  hasError,
  error,
  touched,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Label {...props}>
        <TextInput
          {...props}
          style={{ ...styles.input, ...styles }}
          editable={editable}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLenght={maxLenght}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
        />
      </Label>
      {hasError && touched ? (
        <View style={styles.message}>
          <Text style={styles.helperText}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Input;

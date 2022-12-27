import {
  View,
  Text,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../constants/colors";
import { useState } from "react";
import { isAndroid } from "../../utils";
import { useDispatch } from "react-redux";
import { signUp, signIn } from "../../store/actions";
import Input from "../../components/Input";
import { useReducer } from "react";
import { onInputChange, UPDATE_FORM } from "../../utils/form";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };

    default:
      return state;
  }
};

const Auth = ({ navigation }) => {
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [isLogin, setIsLogin] = useState(true);
  const title = isLogin ? "Login" : "Register";
  const message = isLogin
    ? "Don't you have an account?"
    : "Do you have an account?";
  const messageAction = isLogin ? "Login" : "Register";

  const onHandleSubmit = () => {
    dispatch(
      isLogin
        ? signIn(formState.email.value, formState.password.value)
        : signUp(formState.email.value, formState.password.value)
    );
  };

  const onHandleChangeInput = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={isAndroid ? "height" : "padding"}
      enabled
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Input
          label="Email"
          placeholder="Enter your email"
          placeholderTextColor={COLORS.gray}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={formState.email.value}
          hasError={formState.email.hasError}
          error={formState.email.error}
          touched={formState.email.touched}
          onChangeText={(text) => {
            onHandleChangeInput(text, "email");
          }}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          placeholderTextColor={COLORS.gray}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          value={formState.password.value}
          hasError={formState.password.hasError}
          error={formState.password.error}
          touched={formState.password.touched}
          onChangeText={(text) => {
            onHandleChangeInput(text, "password");
          }}
        />
        <Button
          color={COLORS.primary}
          title={messageAction}
          onPress={onHandleSubmit}
          disabled={!formState.isFormValid}
        />
        <View style={styles.prompt}>
          <TouchableOpacity
            style={styles.promptButton}
            onPress={() => {
              setIsLogin(!isLogin);
            }}
          >
            <Text style={styles.promptMessage}>{message}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;

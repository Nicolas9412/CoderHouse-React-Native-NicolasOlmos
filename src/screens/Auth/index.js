import React from "react";
import { KeyboardAvoidingView, Text, View, TextInput } from "react-native";
import { ISANDROID } from "../../utils/platform";
import {styles} from "./styles"

const index = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={ISANDROID ? "height" : "padding"}>
      <View style={styles.signinContainer}>
        <Text style={styles.title}>
            Login
        </Text>
        <TextInput style={styles.input}>

        </TextInput>
      </View>
    </KeyboardAvoidingView>
  );
};

export default index;

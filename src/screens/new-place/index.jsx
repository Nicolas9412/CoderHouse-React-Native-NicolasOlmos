import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../../utils/colors";
import { styles } from "./styles";
import { savePlace } from "../../store/place.slice";
import { useState } from "react";
import { ImageSelector } from "../../components";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const onHandleSubmit = () => {
    dispatch(savePlace({ title, image }));
    navigation.navigate("Places");
  };

  const onHandleChange = (text) => {
    setTitle(text);
  };

  const onImagePicker = (uri) => {
    setImage(uri);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Titulo</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el titulo"
          onChangeText={onHandleChange}
        />
        <ImageSelector onImagePicker={onImagePicker} />
        <Button color={colors.primary} title="Guardar direccion" onPress={onHandleSubmit} />
      </View>
    </ScrollView>
  );
};

export default NewPlace;

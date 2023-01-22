import { View, Image, Text, Alert, Button } from "react-native";
import { styles } from "./styles";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { COLORS } from "../../constants/colors";

const ImageSelector = ({ onImagePicker }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const onHandleTakeImage = async () => {
    const isCamaraOk = await verifyPermissions();
    if (!isCamaraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    setPickedUrl(image.uri);
    onImagePicker(image.uri);
  };

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permisos insuficientes", "Necesitas dar permisos para usar la cámara", [
        { text: "OK" },
      ]);
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text style={styles.title}> No hay ninguna imagen selecionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Tomar foto" color={COLORS.primary} onPress={onHandleTakeImage} />
    </View>
  );
};

export default ImageSelector;

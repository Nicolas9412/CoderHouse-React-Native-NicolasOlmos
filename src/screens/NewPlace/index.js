import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { COLORS } from "../../constants/colors";
import { styles } from "./styles";
import { savePlace } from "../../store/actions";
import { useState } from "react";
import { ImageSelector, LocationSelector } from "../../components";

const NewPlace = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch();

  const onHandleSubmit = () => {
    dispatch(savePlace({ image, coords }));
    navigation.navigate("Cart");
  };


  const onImagePicker = (uri) => {
    setImage(uri);
  };

  const onLocationPicker = (location) => {
    setCoords(location);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Comprobante de pago</Text>
        <ImageSelector onImagePicker={onImagePicker} />
        <Text style={styles.label}>Direccion de entrega</Text>
        <LocationSelector onLocationPicker={onLocationPicker} />
        <Button color={COLORS.primary} title="Guardar Detalles" onPress={onHandleSubmit} />
      </View>
    </ScrollView>
  );
};

export default NewPlace;

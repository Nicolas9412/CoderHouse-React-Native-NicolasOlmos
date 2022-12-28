import { View, Image, Text, Alert, Button } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import colors from "../../utils/colors";
import * as Location from "expo-location";
import { MapPreview } from "../../components";

const LocationSelector = ({ onLocationPicker }) => {
  const [pickedLocation, setPickedLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permisos insuficientes", "Necesitas dar permisos para acceder a la ubicación", [
        { text: "Ok" },
      ]);
      return false;
    }
    return true;
  };

  const onHandleGetLocation = async () => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    const { latitude, longitude } = location.coords;

    setPickedLocation({ lat: latitude, lng: longitude });

    onLocationPicker({ lat: latitude, lng: longitude });
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        <MapPreview location={pickedLocation} style={styles.mapPreview}>
          <Text style={styles.text}>No se ha seleccionado ninguna ubicación.</Text>
        </MapPreview>
      </View>
      <Button title="Obtener Ubicacion" color={colors.primary} onPress={onHandleGetLocation} />
    </View>
  );
};

export default LocationSelector;

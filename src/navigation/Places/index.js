import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Maps, NewPlace, PlaceDetail, PlaceList } from "../../screens/index";
import { COLORS } from "../../constants/colors";

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Place"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? COLORS.primary : COLORS.secondary,
        },
        headerTintColor: COLORS.black,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        name="Places"
        component={PlaceList}
        options={({ navigation }) => ({
          title: "Direcciones",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("NewPlace");
              }}>
              <Ionicons name="add-circle-outline" size={25} color={COLORS.black} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetail}
        options={{ title: "Detalles de la dirección" }}
      />
      <Stack.Screen
        name="NewPlace"
        component={NewPlace}
        options={{ title: "Nueva dirección" }}
      />
      <Stack.Screen name="Maps" component={Maps} options={{ title: "Mapa" }} />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
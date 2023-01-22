import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, Platform } from "react-native";
import { Cart, NewPlace, Maps } from "../../screens";

const Stack = createNativeStackNavigator();

const CartNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS == "android" ? COLORS.primary : COLORS.secondary,
        },
        headerTintColor: Platform.OS == "android" ? "white" : COLORS.primary,
        headerTitleStyle: {
          fontFamily: "OpenSans-Bold",
        },
      }}
    >
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({ navigation }) => ({
          title: "Cart",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("NewPlace");
              }}
            >
              <Ionicons
                name="add-circle-outline"
                size={25}
                color={COLORS.black}
              />
            </TouchableOpacity>
          ),
        })}
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

export default CartNavigation;

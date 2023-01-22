import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

import { COLORS } from "../../constants/colors";

import { Categories, Foods, FoodDetail } from "../../screens/index";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS == "android" ? COLORS.primary : COLORS.secondary,
        },
        headerTintColor: Platform.OS == "android" ? "white" : Colors.primary,
        headerTitleStyle: {
          fontFamily: "OpenSans-Bold",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ title: "Categories" }}
      ></Stack.Screen>
      <Stack.Screen
        name="Foods"
        component={Foods}
        options={({ route }) => ({
          title: route.params.name,
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="FoodDetail"
        component={FoodDetail}
        options={({ route }) => ({
          title: route.params.name,
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
export default ShopNavigation;

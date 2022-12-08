import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../../constants/colors";
import { Cart } from "../../screens";

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
        headerTintColor: Platform.OS == "android" ? "white" : Colors.primary,
        headerTitleStyle: {
          fontFamily: "OpenSans-Bold",
        },
      }}
    >
      <Stack.Screen name="Cart" component={Cart} options={{ title: "Cart" }} />
    </Stack.Navigator>
  );
};

export default CartNavigation;

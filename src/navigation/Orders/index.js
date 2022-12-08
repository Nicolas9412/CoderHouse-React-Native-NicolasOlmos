import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../../constants/colors";

import { Orders } from "../../screens";

const Stack = createNativeStackNavigator();

const OrdersNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
        name="Orders"
        component={Orders}
        options={{ title: "Orders" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default OrdersNavigation;

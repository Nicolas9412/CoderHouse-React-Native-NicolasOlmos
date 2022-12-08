import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { isAndroid } from "../../utils/platForm";

import CartNavigation from "../Cart";
import ShopNavigation from "../Shop";
import OrdersNavigation from "../Orders";

const BottomTabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "OpenSans-Regular",
          fontSize: 12,
        },
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          paddingBottom: isAndroid ? 5 : 0,
          height: isAndroid ? 60 : 50,
        },
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigation}
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={COLORS.primary}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartNavigation}
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={24}
              color={COLORS.primary}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersNavigation}
        options={{
          title: "Orders",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "file-tray" : "file-tray-outline"}
              size={24}
              color={COLORS.primary}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigation;

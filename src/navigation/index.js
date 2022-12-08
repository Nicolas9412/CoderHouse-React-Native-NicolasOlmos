import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNavigation from "./Tab";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;

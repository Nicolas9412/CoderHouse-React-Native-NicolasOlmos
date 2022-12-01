import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Categories, Movies, Movie } from "../src/screens";

const Stack = createNativeStackNavigator();

const MovieNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Genders"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Genders" component={Categories} />
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MovieNavigator;

import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Tab";
import AuthNavigation from "./Auth";
import { useSelector } from "react-redux";

const AppNavigation = () => {
  const userId = useSelector((state) => state.auth.userId);
  return (
    <NavigationContainer>
      {userId ? <TabNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;

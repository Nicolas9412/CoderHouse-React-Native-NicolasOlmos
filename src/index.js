import { Provider } from "react-redux";
import { init } from "./db";
import AppNavigator from "./navigation/index";
import { store } from "./store";

init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Database fail connect");
    console.log(err.message);
  });

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

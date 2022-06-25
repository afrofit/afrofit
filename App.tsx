import * as React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Index } from "./app/Index";
import { Provider } from "react-redux";
import STORE from "./app/store/store";

export default function App() {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
    "NativeBase: The contrast ratio of",
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);

  return (
    <Provider store={STORE}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </Provider>
  );
}

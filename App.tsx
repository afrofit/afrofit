import * as React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import { Index } from "./app/Index";
import { Provider } from "react-redux";
import STORE from "./app/store/store";

export default function App() {
  LogBox.ignoreAllLogs(true);

  return (
    <Provider store={STORE}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </Provider>
  );
}

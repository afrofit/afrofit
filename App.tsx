import * as React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { initializeApp } from "firebase/app";
import AppLoading from "expo-app-loading";

// import { firebaseConfig } from "./app/config/firebase";
import { Index } from "./app/Index";
import { Provider } from "react-redux";
import STORE from "./app/store/store";

export default function App() {
  LogBox.ignoreAllLogs(true);

  // initializeApp(firebaseConfig);

  return (
    <Provider store={STORE}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </Provider>
  );
}

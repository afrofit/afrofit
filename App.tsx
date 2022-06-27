import * as React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { initializeApp } from "firebase/app";

import { Index } from "./app/Index";
import { Provider } from "react-redux";
import STORE from "./app/store/store";
import { firebaseConfig } from "./app/config/firebase";

export default function App() {
  LogBox.ignoreAllLogs(true);

  React.useEffect(() => {
    const app = initializeApp(firebaseConfig);
  }, []);

  return (
    <Provider store={STORE}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </Provider>
  );
}

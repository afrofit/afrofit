import * as React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { initializeApp } from "firebase/app";

import { firebaseConfig } from "./app/config/firebase";
import { Index } from "./app/Index";
import { Provider } from "react-redux";
import STORE from "./app/store/store";

export default function App() {
  LogBox.ignoreAllLogs(true);

  React.useEffect(() => {
    // console.log("Config!!!!", firebaseConfig);
    // console.log("App", app);
    initializeApp(firebaseConfig);
    // console.log("Firebase initialized!");
  }, []);

  return (
    <Provider store={STORE}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </Provider>
  );
}

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Index } from "./app/Index";
import { Provider } from "react-redux";
import STORE from "./app/store/store";

const App = () => {
  return (
    <Provider store={STORE}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

import * as React from "react";
import GameNavigator from "./src/navigator/AppNavigator";
import AuthNavigator from "./src/navigator/AuthNavigator";

import { LoginScreen } from "./src/screens/auth/Login/LoginScreen";
import { ResetPasswordScreen } from "./src/screens/auth/ResetPassword/ResetPasswordScreen";

export const Index = () => {
  return (
    <>
      <GameNavigator />
      {/* <AuthNavigator /> */}
      {/* <LoginScreen /> */}
      {/* <ResetPasswordScreen /> */}
    </>
  );
};

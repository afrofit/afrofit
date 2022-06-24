import * as React from "react";

import { LoginScreen } from "./src/screens/auth/Login/LoginScreen";
import { ResetPasswordScreen } from "./src/screens/auth/ResetPassword/ResetPasswordScreen";

export const Index = () => {
  return (
    <>
      {/* <LoginScreen /> */}
      <ResetPasswordScreen />
    </>
  );
};

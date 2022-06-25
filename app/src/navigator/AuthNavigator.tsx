import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { WelcomeScreen } from "../screens/welcome/WelcomeScreen";
import { LoginScreen } from "../screens/auth/Login/LoginScreen";
import { ResetPasswordScreen } from "../screens/auth/ResetPassword/ResetPasswordScreen";

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  ResetPassword: undefined;
};

const { Screen, Navigator } = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => (
  <Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
    <Screen name={"Welcome"} component={WelcomeScreen} />
    <Screen name={"Login"} component={LoginScreen} />
    <Screen name={"ResetPassword"} component={ResetPasswordScreen} />
  </Navigator>
);

export default AuthNavigator;

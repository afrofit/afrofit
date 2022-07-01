import { StackNavigationProp } from "@react-navigation/stack";
import { GameStackParamList, GameScreensStackParamList } from "./AppNavigator";
import { AuthStackParamList } from "./AuthNavigator";

export type WelcomeScreenNavType = StackNavigationProp<
  AuthStackParamList,
  "Welcome"
>;

export type LoginScreenNavType = StackNavigationProp<
  AuthStackParamList,
  "Login"
>;

export type ResetPasswordScreenNavType = StackNavigationProp<
  AuthStackParamList,
  "ResetPassword"
>;

export type StoryScreenNavType = StackNavigationProp<
  GameStackParamList,
  "StoryScreen"
>;

export type StoryIntroScreenNavType = StackNavigationProp<
  GameStackParamList,
  "StoryIntroScreen"
>;

export type HomeScreenNavType = StackNavigationProp<
  GameScreensStackParamList & GameStackParamList,
  "Home"
>;

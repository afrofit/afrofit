import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import { HomeScreen } from "../screens/game/home/HomeScreen";
import { MarathonScreen } from "../screens/game/marathon/MarathonScreen";
import { ProfileScreen } from "../screens/game/profile/ProfileScreen";
import { COLORS } from "../../theme/globals";
import { StoryIntroScreen } from "../screens/game/game/StoryIntroScreen";
import { StoryScreen } from "../screens/game/game/StoryScreen";
import { ChapterIntroScreen } from "../screens/game/game/ChapterIntroScreen";
import { DanceScreen } from "../screens/game/game/DanceScreen";
import { StoryFinishScreen } from "../screens/game/game/StoryFinishScreen";
import { ChapterPassScreen } from "../screens/game/game/ChapterPassScreen";
import { ChapterFailScreen } from "../screens/game/game/ChapterFailScreen";
import { EventDetails } from "../screens/game/event/components/EventDetails";
import { ClassDetails } from "../screens/game/class/components/ClassDetails";
import { EventScreen } from "../screens/game/event/EventScreen";
import { ClassEventScreen } from "../screens/game/ClassEventScreen";

const ICON_SIZE = 30;

export type GameStackParamList = {
  GameRoot: undefined;
  StoryScreen: { storyId: string };
  StoryIntroScreen: { storyId: string };
  ChapterIntroScreen: { chapterId: string; userId: string; storyId: string };
  DanceScreen: undefined;
  StoryFinish: undefined;
  ChapterFail: undefined;
  ChapterPass: undefined;
  Home: undefined;
  EventDetails:undefined;
  ClassDetails:undefined;
};

export type GameScreensStackParamList = {
  Home: undefined;
  Marathon: undefined;
  Profile: undefined;
  ClassEvent:undefined;

};

const { Screen: TabScreen, Navigator: TabNavigator } =
  createBottomTabNavigator<GameScreensStackParamList>();

const { Screen, Navigator } = createStackNavigator<GameStackParamList>();

const GameNavigatorTabs = () => (
  <TabNavigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: COLORS.gold,
      tabBarStyle: {
        backgroundColor: COLORS.dark,
        borderColor: COLORS.dark,
      },
    }}
  >
    <TabScreen
      name={"Home"}
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" color={color} size={ICON_SIZE} />
        ),
      }}
    />
      <TabScreen 
      name={"ClassEvent"} 
      component={ClassEventScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="event" color={color} size={ICON_SIZE} />
        ),
      }}
      />
    <TabScreen
      name={"Marathon"}
      component={MarathonScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="award" color={color} size={ICON_SIZE} />
        ),
      }}
    />
    <TabScreen
      name={"Profile"}
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="user" color={color} size={ICON_SIZE} />
        ),
      }}
    />
  
  </TabNavigator>
);

const GameNavigator = () => (
  <Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
    <Screen name={"GameRoot"} component={GameNavigatorTabs} />
    <Screen name={"StoryIntroScreen"} component={StoryIntroScreen} />
    <Screen name={"StoryScreen"} component={StoryScreen} />
    <Screen name={"ChapterIntroScreen"} component={ChapterIntroScreen} />
    <Screen name={"DanceScreen"} component={DanceScreen} />
    <Screen name={"StoryFinish"} component={StoryFinishScreen} />
    <Screen name={"ChapterPass"} component={ChapterPassScreen} />
    <Screen name={"ChapterFail"} component={ChapterFailScreen} />
    <Screen name={'ClassDetails'} component={ClassDetails}/>
    <Screen name={'EventDetails'} component={EventDetails}/>

  </Navigator>
);

export default GameNavigator;

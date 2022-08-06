import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import * as React from "react";

import { Header } from "./components/Header";
import { Section } from "../../../../src/components/section/Section";

import { ActivityTodayList } from "./components/ActivityTodayList";
import Spacer from "../../../../src/components/elements/Spacer";
import { StoryList } from "./components/StoryList";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { selectTodaysActivity } from "../../../../store/reducers/activity/activity.slice";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavType } from "../../../../src/navigator/types";
import { selectUser } from "../../../../store/reducers/auth/auth.slice";
import { GetUserTodaysActivityData } from "../../../../store/reducers/activity/thunks/fetch-todays-activity.thunk";
import { GetUserPerformanceData } from "../../../../store/reducers/activity/thunks/fetch-user-performance.thunk";

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavType>();

  const currentUser = useSelector(selectUser);
  const todaysActivity = useSelector(selectTodaysActivity);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (currentUser) {
      dispatch(GetUserTodaysActivityData(currentUser.userId));
      dispatch(GetUserPerformanceData(currentUser.userId));
    }
  }, []);

  const handleNavigateToStoryIntro = (storyId: string) => {
    navigation.navigate("StoryIntroScreen", { storyId });
  };

  if (!currentUser) return null;

  return (
    <>
      <SolidBackground />
      <Screen>
        <Header
          username={currentUser.username || "Fetching username..."}
          dpId={currentUser.displayPicId}
        />
        <Spacer h={10} />
        <Section title="Your activity today">
          <ActivityTodayList todaysActivity={todaysActivity} />
        </Section>
        <Section title="Your stories">
          {/* <StoryList
            stories={stories}
            handleNavigateToStory={handleNavigateToStoryIntro}
          /> */}
        </Section>
      </Screen>
    </>
  );
};

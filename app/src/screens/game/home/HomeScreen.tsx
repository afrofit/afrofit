import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import * as React from "react";
import { useCollection } from "../../../../src/hooks/useCollection";

import { Header } from "./components/Header";
import { Section } from "../../../../src/components/section/Section";

import { ActivityTodayList } from "./components/ActivityTodayList";
import Spacer from "../../../../src/components/elements/Spacer";
import { StoryList } from "./components/StoryList";
import { useSelector } from "react-redux";
import { selectCurrentUserProfile } from "../../../../store/reducers/auth/auth.slice";

import { useDispatch } from "react-redux";

import { selectTodaysActivity } from "../../../../store/reducers/activity/activity.slice";
import { FetchUserActivityToday } from "../../../../store/reducers/activity/activity.thunks";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavType } from "../../../../src/navigator/types";

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavType>();

  const currentUserProfile = useSelector(selectCurrentUserProfile);
  const todaysActivity = useSelector(selectTodaysActivity);
  const dispatch = useDispatch();

  const { documents: stories } = useCollection("stories");

  React.useEffect(() => {
    if (currentUserProfile) {
      dispatch(FetchUserActivityToday(currentUserProfile?.user_id));
    }
  }, []);

  // React.useEffect(() => {
  //   console.log("currentUserProfile", currentUserProfile);
  // }, [currentUserProfile]);

  // React.useEffect(() => {
  //   console.log("stories", stories);
  // }, [stories]);

  const handleNavigateToStoryIntro = (storyId: string) => {
    navigation.navigate("StoryIntroScreen", { storyId });
  };

  return (
    <>
      <SolidBackground />
      <Screen>
        <Header
          username={currentUserProfile?.username || "Fetching username..."}
          imageUrl={currentUserProfile?.profile_pic}
        />
        <Spacer h={10} />
        <Section title="Your activity today">
          <ActivityTodayList todaysActivity={todaysActivity} />
        </Section>
        <Section title="Your stories">
          <StoryList
            stories={stories}
            handleNavigateToStory={handleNavigateToStoryIntro}
          />
        </Section>
      </Screen>
    </>
  );
};

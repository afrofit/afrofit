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

import {
  selectTodaysActivity,
  selectUserPerformance,
} from "../../../../store/reducers/activity/activity.slice";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavType } from "../../../../src/navigator/types";
import {
  selectUser,
  selectUserIsSubscribed,
} from "../../../../store/reducers/auth/auth.slice";
import { GetUserTodaysActivityData } from "../../../../store/reducers/activity/thunks/fetch-todays-activity.thunk";
import { GetUserPerformanceData } from "../../../../store/reducers/activity/thunks/fetch-user-performance.thunk";
import { AlertModal } from "../../../../../app/src/components/modals/AlertModal";
import { FetchMarathonData } from "../../../../../app/store/reducers/story/thunks/fetch-marathon-data.thunk";
import { selectCurrentUserRank } from "../../../../../app/store/reducers/marathon/marathon.slice";

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavType>();
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);
  const todaysActivity = useSelector(selectTodaysActivity);
  const userPerformanceData = useSelector(selectUserPerformance);
  const userIsSubscribed = useSelector(selectUserIsSubscribed);
  const currentUserRank = useSelector(selectCurrentUserRank);

  const [showSubscribeModal, setShowSubscribeModal] = React.useState(false);

  React.useEffect(() => {
    if (currentUser) {
      dispatch(GetUserTodaysActivityData(currentUser.userId));
      dispatch(GetUserPerformanceData(currentUser.userId));
      dispatch(FetchMarathonData(currentUser.userId));
    }
  }, []);

  React.useEffect(() => {
    if (!userIsSubscribed) {
      setShowSubscribeModal(true);
    } else if (userIsSubscribed) {
      setShowSubscribeModal(false);
    }
  }, [userIsSubscribed]);

  const handleNavigateToStoryIntro = (storyId: string) => {
    navigation.navigate("StoryIntroScreen", { storyId });
  };

  if (!currentUser) return null;

  return (
    <>
      <AlertModal
        visible={showSubscribeModal}
        body="You need an active subscription to the Afrofit club to use this app!"
        title="Oops!"
        dismissText="Continue"
        onDismiss={() => setShowSubscribeModal(false)}
      />
      <SolidBackground />
      <Screen>
        <Header
          username={currentUser.username || "Fetching username..."}
          dpId={currentUser.displayPicId}
          currentUserRank={currentUserRank}
        />
        <Spacer h={10} />
        <Section title="Your activity today">
          <ActivityTodayList todaysActivity={todaysActivity} />
        </Section>
        <Section title="Your stories">
          <StoryList handleNavigateToStory={handleNavigateToStoryIntro} />
        </Section>
      </Screen>
    </>
  );
};

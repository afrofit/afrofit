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
import { useIsFocused, useNavigation } from "@react-navigation/native";
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
import { selectCurrentStory } from "../../../../../app/store/reducers/story/story.slice";
import { FetchUserStoryActivity } from "../../../../store/reducers/story/thunks/fetch-user-story-activity.thunk";
import { ScrollView } from "react-native";
import { HomeScrollView } from "./styled";
import { Font } from "../../../../../app/src/components/font/Font";

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavType>();
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);
  const todaysActivity = useSelector(selectTodaysActivity);
  const userPerformanceData = useSelector(selectUserPerformance);
  const userIsSubscribed = useSelector(selectUserIsSubscribed);
  const currentUserRank = useSelector(selectCurrentUserRank);
  const currentStory = useSelector(selectCurrentStory);
  
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


  const getdata=(storyId:any)=>{
    dispatch(FetchUserStoryActivity(
      storyId,
      currentUser?.userId,
     onHandleStorySuccess,
     onHandleStoryFailure,
  ))
  }

const onHandleStorySuccess=(currentStory:any)=>{
  if(currentStory?.playedStory?.userSteps){
    navigation.navigate("StoryScreen",{storyId:currentStory?.playedStory?.storyId});
  }else{
    navigation.navigate("StoryIntroScreen",{storyId :currentStory?.playedStory?.storyId});
  }
}

const onHandleStoryFailure=()=>{

}

  
  const handleNavigateToStoryIntro = async(storyId: any) => {
    if (storyId && storyId != null) {
      await getdata(storyId)
    } else {
      setShowSubscribeModal(true);
    }
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
          dpUrl={currentUser?.imageUrl}
          currentUserRank={currentUserRank}
        />
        <Spacer h={10} />
        <Section title="Your activity today">
          <ActivityTodayList todaysActivity={todaysActivity} />
        </Section>
        <HomeScrollView showsVerticalScrollIndicator={false}>
        <Font variant="smb" spacing={1} caps color="lightblue">
        Your stories
        </Font>
        <Spacer h={10}/>
          <StoryList handleNavigateToStory={handleNavigateToStoryIntro} />
        </HomeScrollView>
      </Screen>
    </>
  );
};

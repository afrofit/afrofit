import * as React from "react";

import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import { Placer } from "../../../../src/components/elements/Placer";
import { IconButton } from "../../../../src/components/buttons/IconButton";
import { useNavigation } from "@react-navigation/native";
import { StoryIntroScreenNavType } from "../../../../src/navigator/types";
import { FontConstrainer, VideoContainer } from "./styled";
import { LargeButton } from "../../../../src/components/buttons/LargeButton";
import { VertiCard } from "../../../../src/components/cards/VertiCard";
import { VideoView } from "../../../../src/components/video/VideoView";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentStory,
  unSetCurrentStory,
} from "../../../../store/reducers/story/story.slice";
import { selectUser } from "../../../../store/reducers/auth/auth.slice";
import { FetchUserStoryActivity } from "../../../../store/reducers/story/thunks/fetch-user-story-activity.thunk";

interface Props {
  route: { params: { storyId: string } };
}

export const StoryIntroScreen: React.FC<Props> = ({ route }) => {
  const { storyId } = route.params;

  const dispatch = useDispatch();
  const navigation = useNavigation<StoryIntroScreenNavType>();

  const currentUser = useSelector(selectUser);
  const currentStory = useSelector(selectCurrentStory);

  React.useEffect(() => {
    currentUser &&
      dispatch(FetchUserStoryActivity(storyId, currentUser.userId));
  }, []);

  React.useEffect(() => {
    console.log("currentStory", currentStory);
  }, [currentStory]);

  const handleGoBack = () => {
    dispatch(unSetCurrentStory());
    navigation.navigate("Home");
  };

  const handleStartStory = () => {
    navigation.navigate("StoryScreen", { storyId });
  };

  return (
    <>
      <SolidBackground />
      <Screen>
        <Placer top={2} left={3}>
          <IconButton onPress={handleGoBack} />
        </Placer>
        {currentStory && (
          <>
            <FontConstrainer>
              <Font align="center" variant="h2" color="light">
                {currentStory.title}
              </Font>
            </FontConstrainer>
            <VideoContainer size="sm">
              <VideoView
                onVideoFinished={() => null}
                onVideoHalfwayFinished={() => null}
                loop
                videoUrl={
                  currentStory.userSteps
                    ? currentStory.intro_video_alt
                    : currentStory.intro_video
                }
              />
            </VideoContainer>
            <Font align="center" variant="p" color="lightblue">
              {currentStory.description}
            </Font>
            <VertiCard
              bodyMoves={currentStory.totalTargetSteps - currentStory.userSteps}
            />
            <LargeButton
              title={currentStory.userSteps ? "Continue Story" : "Start story"}
              onPress={handleStartStory}
            />
          </>
        )}
      </Screen>
    </>
  );
};

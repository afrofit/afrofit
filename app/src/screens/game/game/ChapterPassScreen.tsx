import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import * as React from "react";
import {
  BottomContainer,
  ContentContainer,
  DanceVideoContainer,
  FontConstrainer,
} from "./styled";
import { useSelector } from "react-redux";
import {
  selectCurrentChapter,
  selectCurrentStory,
} from "../../../../../app/store/reducers/story/story.slice";
import { selectUser } from "../../../../../app/store/reducers/auth/auth.slice";
import Spacer from "../../../../../app/src/components/elements/Spacer";
import { LargeButton } from "../../../../../app/src/components/buttons/LargeButton";
import { VideoView } from "../../../../../app/src/components/video/VideoView";
import { STORY_DATA_EXTRAS_MAP } from "../../../../../app/data/story_data";
import { useNavigation } from "@react-navigation/native";
import { StoryScreenNavType } from "../../../../../app/src/navigator/types";

export const ChapterPassScreen = () => {
  const navigation = useNavigation<StoryScreenNavType>();

  const currentUser = useSelector(selectUser);
  const currentStory = useSelector(selectCurrentStory);
  const currentChapter = useSelector(selectCurrentChapter);

  if (!currentStory || !currentUser || !currentChapter) return null;

  const handleFinish = () => {
    navigation.navigate("StoryScreen", { storyId: currentStory?.id });
  };

  return (
    <>
      <SolidBackground />
      <Screen>
        <FontConstrainer>
          <Font align="center" variant="h2" color="hilite_orange">
            Well done!
          </Font>
        </FontConstrainer>
        <ContentContainer>
          <DanceVideoContainer size="sm">
            <VideoView
              onVideoFinished={() => null}
              onVideoHalfwayFinished={() => null}
              loop
              videoUrl={STORY_DATA_EXTRAS_MAP[currentStory.id].introVideoAlt}
            />
          </DanceVideoContainer>
          <Spacer h={20} />
          <Font align="center" variant="p" color="light">
            You finished this chapter successfully! But this is not the end!
            There's is still much to do!
          </Font>
        </ContentContainer>
        <BottomContainer>
          <LargeButton title="Continue" onPress={handleFinish} />
        </BottomContainer>
      </Screen>
    </>
  );
};

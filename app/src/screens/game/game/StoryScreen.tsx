import * as React from "react";

import { useNavigation } from "@react-navigation/native";
import { StoryScreenNavType } from "../../../../src/navigator/types";
import { selectUser } from "../../../../store/reducers/auth/auth.slice";
import {
  selectCurrentChapters,
  selectCurrentStory,
} from "../../../../store/reducers/story/story.slice";
import { useDispatch, useSelector } from "react-redux";
import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import { Placer } from "../../../../src/components/elements/Placer";
import { IconButton } from "../../../../src/components/buttons/IconButton";
import { BorderedImage } from "../../../../src/components/image/BorderedImage";
import Spacer from "../../../../src/components/elements/Spacer";
import { VertiCard } from "../../../../src/components/cards/VertiCard";
import { Section } from "../../../../src/components/section/Section";
import { ChapterList } from "./components/ChapterList";
import { FetchStoryChapters } from "../../../../store/reducers/story/thunks/fetch-story-chapters.thunk";

interface Props {
  route: { params: { storyId: string } };
}

export const StoryScreen: React.FC<Props> = ({ route }) => {
  const { storyId } = route.params;

  const dispatch = useDispatch();
  const navigation = useNavigation<StoryScreenNavType>();

  const currentUser = useSelector(selectUser);
  const currentStory = useSelector(selectCurrentStory);
  const currentChapters = useSelector(selectCurrentChapters);

  React.useEffect(() => {
    currentUser &&
      currentStory &&
      dispatch(FetchStoryChapters(storyId, currentUser.userId));
  }, []);

  React.useEffect(() => {
    console.log("currentStory", currentStory);
  }, [currentStory]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToChapter = (chapterId: string) => {
    console.log("ChapterID", chapterId);
  };

  return (
    <>
      <SolidBackground />
      <Screen>
        <Placer top={2} left={3}>
          <IconButton onPress={handleGoBack} />
        </Placer>
        <BorderedImage size="sm" imageUrl={currentStory?.thumbnail} />
        <Spacer />
        <Font variant="h4" align="center">
          {currentStory ? currentStory.title : "Loading title..."}
        </Font>
        <Spacer />
        <VertiCard
          bodyMoves={
            currentStory
              ? currentStory.totalTargetSteps - currentStory.userSteps
              : 0
          }
        />
        <Spacer />
        <Section title="Story Chapters">
          <ChapterList
            currentChapters={currentChapters}
            onTapCell={handleGoToChapter}
          />
        </Section>
      </Screen>
    </>
  );
};

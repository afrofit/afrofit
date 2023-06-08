import * as React from "react";

import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
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
import { STORY_DATA_EXTRAS_MAP } from "../../../../../app/data/story_data";

interface Props {
  route: { params: { storyId: string } };
}

export const StoryScreen: React.FC<Props> = ({ route }) => {
  const { storyId } = route.params;

  const isFocused = useIsFocused();

  const dispatch = useDispatch();
  const navigation = useNavigation<StoryScreenNavType>();

  const currentUser = useSelector(selectUser);
  const currentStory = useSelector(selectCurrentStory);
  const currentChapters = useSelector(selectCurrentChapters);

  React.useEffect(() => {
    currentUser &&
      currentStory &&
      isFocused &&
      dispatch(
        FetchStoryChapters(
          storyId,
          currentUser.userId,
          currentStory.playedStoryId
        )
      );
  }, [currentUser, currentStory, isFocused]);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     console.log("Focused Now!");
  //     // currentUser &&
  //     //   currentStory &&
  //     dispatch(
  //       FetchStoryChapters(
  //         storyId,
  //         currentUser!.userId,
  //         currentStory!.playedStoryId
  //       )
  //     );
  //   }, [currentUser, currentStory])
  // );

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  if (!currentUser || !currentStory || !currentChapters) return null;

  const handleGoToChapter = (chapterId: string) => {
    navigation.navigate("ChapterIntroScreen", {
      chapterId,
      userId: currentUser.userId,
      storyId: currentStory.id,
    });
  };

  return (
    <>
      <SolidBackground />
      <Screen>
        <Placer top={2} left={3}>
          <IconButton onPress={handleGoBack} />
        </Placer>
        <BorderedImage
          size="sm"
          imageUrl={STORY_DATA_EXTRAS_MAP[currentStory!.id]?.thumbUrl}
        />
        <Spacer />
        <Font variant="h4" align="center">
          {currentStory ? currentStory?.title : "Loading title..."}
        </Font>
        <Spacer />
        <VertiCard
          bodyMoves={
            currentStory
              ? currentStory?.totalTargetSteps - currentStory?.userSteps
              : 0
          }
        />
        <Spacer />
        <Section title="Story Chapters">
          <ChapterList
            currentChapters={currentChapters}
            onTapCell={handleGoToChapter}
            lastCompletedChapter={currentStory!.lastChapterCompleted}
          />
        </Section>
      </Screen>
    </>
  );
};

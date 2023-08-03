import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { Linking, Platform } from "react-native";

import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import { Placer } from "../../../../../app/src/components/elements/Placer";
import { IconButton } from "../../../../../app/src/components/buttons/IconButton";
import { StoryScreenNavType } from "../../../../../app/src/navigator/types";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../../app/store/reducers/auth/auth.slice";
import {
  selectCurrentChapter,
  selectCurrentStory,
} from "../../../../../app/store/reducers/story/story.slice";
import { FetchChapterDetail } from "../../../../../app/store/reducers/story/thunks/fetch-user-chapter-detail.thunk";
import Spacer from "../../../../../app/src/components/elements/Spacer";
import { LargeButton } from "../../../../../app/src/components/buttons/LargeButton";
import { ChapterIntroWrapper, ContentContainer, ImageContainer } from "./styled";
import { ImageView } from "../../../../../app/src/components/image/ImageView/ImageView";
import { MIXCLOUD_URL } from "../../../../../app/constants/device";
import useAudio from "../../../../../app/src/hooks/useAudio";
import { CHAPTER_AUDIO_MAP } from "../../../../../app/data/chapter_data";
import useUnmount from "../../../../../app/src/hooks/useUnmount";

interface Props {
  route: { params: { chapterId: string; userId: string; storyId: string } };
}

export const ChapterIntroScreen: React.FC<Props> = ({ route }) => {
  const { chapterId, userId, storyId } = route.params;

  const [existingUserSteps, setExistingUserSteps] = React.useState<
    number | null
  >(null);

  const dispatch = useDispatch();
  const navigation = useNavigation<StoryScreenNavType>();

  const currentUser = useSelector(selectUser);
  const currentStory = useSelector(selectCurrentStory);
  const currentChapter = useSelector(selectCurrentChapter);

  React.useEffect(() => {
    dispatch(FetchChapterDetail(userId, storyId, chapterId));
  }, []);

  const userHasPlayedChapter = React.useMemo(() => {
    if (currentChapter) {
      return currentChapter.userSteps > 0;
    }
    return false;
  }, [currentChapter]);

  const { handlePlayback, handleUnloadSound } = useAudio(
    userHasPlayedChapter
      ? CHAPTER_AUDIO_MAP[chapterId].alt_url
      : CHAPTER_AUDIO_MAP[chapterId].url
  );

  const startAudio = React.useCallback(async () => {
    await handlePlayback();
  }, []);

  React.useEffect(() => {
    startAudio();
  }, []);

  useUnmount(() => handleUnloadSound());

  if (
    !currentUser ||
    !currentStory ||
    !chapterId ||
    !userId ||
    !storyId ||
    !currentChapter
  )
    return null;

  const handleStartChapter = async () => {
    await handleUnloadSound();
    navigation.navigate("DanceScreen");
  };

  const handleMinimizeApp = () => {
    Linking.openURL(MIXCLOUD_URL);
    // if (Platform.OS === 'ios') return Linking.openURL('music://');
  };

  const handleGoBack = async () => {
    await handleUnloadSound();
    navigation.goBack();
  };

  return (
    <>
      <SolidBackground />
      <Screen>
        <Placer top={2} left={3}>
          <IconButton onPress={handleGoBack} />
        </Placer>
        <Font spacing={1} variant="sm1" caps align="center">
          {currentStory.title}
        </Font>
        <Spacer h={10} />
        <Font variant="sm2" align="center">
          Chapter {currentChapter.order}
        </Font>
        <ChapterIntroWrapper>
        <Spacer h={30} />
        <Font variant="pb" align="center" color="hilite_purpink">
          {currentChapter.targetSteps - currentChapter.userSteps} Dance Steps
          Left
        </Font>

        {/* <ContentContainer> */}
          <Font variant="h3" align="center" color="hilite_orange">
            Select your music
          </Font>
          <Spacer h={20} />
          <ImageContainer h={200}>
            <ImageView
              src={require("../../../../assets/images/art/solfa.png")}
            />
          </ImageContainer>
          <Font variant="p" align="center" color="lightblue">
            You can minimize this app to select your favorite music from your
            app or the web and come back to dance or exercise to it
          </Font>
        {/* </ContentContainer> */}
        <Spacer h={15} />

        <LargeButton
          variant="outlined"
          title={"Tap here to select music mix"}
          onPress={handleMinimizeApp}
        />
        <Spacer h={20} />
        <LargeButton
          title={userHasPlayedChapter ? "Resume Dancing" : "Start Dancing"}
          onPress={handleStartChapter}
        />
        </ChapterIntroWrapper>
      </Screen>
    </>
  );
};

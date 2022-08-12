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
import { ContentContainer, ImageContainer } from "./styled";
import { ImageView } from "../../../../../app/src/components/image/ImageView/ImageView";
import { MIXCLOUD_URL } from "../../../../../app/constants/device";
import useAudio from "../../../../../app/src/hooks/useAudio";
import { CHAPTER_AUDIO_MAP } from "../../../../../app/data/chapter_data";

interface Props {
  route: { params: { chapterId: string } };
}

export const ChapterIntroScreen: React.FC<Props> = ({ route }) => {
  const { chapterId } = route.params;

  const dispatch = useDispatch();
  const navigation = useNavigation<StoryScreenNavType>();

  const currentUser = useSelector(selectUser);
  const currentStory = useSelector(selectCurrentStory);
  const currentChapter = useSelector(selectCurrentChapter);

  const { handleUnloadSound, handlePlayback } = useAudio(
    CHAPTER_AUDIO_MAP[chapterId].url
  );

  React.useEffect(() => {
    const startAudio = async () => {
      await handlePlayback();
    };
    startAudio();

    return () => {
      handleUnloadSound();
    };
  }, []);

  React.useEffect(() => {
    console.log("currentChapter", currentChapter);
  }, [currentChapter]);

  React.useEffect(() => {
    currentUser &&
      chapterId &&
      currentStory &&
      dispatch(
        FetchChapterDetail(currentUser.userId, currentStory.id, chapterId)
      );
  }, []);

  const handleStartChapter = () => {
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

  if (!currentStory || !currentChapter) return null;

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
        <Spacer h={30} />
        <Font variant="pb" align="center" color="hilite_purpink">
          {currentChapter.targetSteps} Dance Steps Left
        </Font>

        <ContentContainer>
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
        </ContentContainer>

        <LargeButton
          variant="outlined"
          title={"Tap here to select music mix"}
          onPress={handleMinimizeApp}
        />
        <Spacer h={20} />
        <LargeButton
          title={currentStory.userSteps ? "Resume Dancing" : "Start Dancing"}
          onPress={handleStartChapter}
        />
      </Screen>
    </>
  );
};

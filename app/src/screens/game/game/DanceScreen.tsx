import * as React from "react";
import { useNavigation } from "@react-navigation/native";

import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import Spacer from "../../../../../app/src/components/elements/Spacer";
import {
  ButtonContainer,
  ContentContainer,
  DanceVideoContainer,
  VideoContainer,
} from "./styled";
import { RoundButton } from "../../../../../app/src/components/buttons/RoundButton";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../../app/store/reducers/auth/auth.slice";
import {
  selectCurrentChapter,
  selectCurrentStory,
} from "../../../../../app/store/reducers/story/story.slice";
import { StoryScreenNavType } from "../../../../../app/src/navigator/types";
import { DanceStatsItem } from "./components/DanceStatsItem";
import { DanceStatsContainer } from "./components/DanceStatsItem.styled";
import { VideoViewExtended } from "../../../../../app/src/components/video/VideoViewExtended";
import { GamePausedModal } from "../../../../../app/src/components/modals/GamePausedModal";
import { ConfirmModal } from "../../../../../app/src/components/modals/ConfirmModal";

type GameFinishType = "unfinished" | "inTime" | "timeElapsed" | "userQuit";

export const DanceScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StoryScreenNavType>();

  const [gameEndedType, setGameEndedType] =
    React.useState<GameFinishType>("unfinished");
  const [gamePaused, setGamePaused] = React.useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);

  const currentUser = useSelector(selectUser);
  const currentStory = useSelector(selectCurrentStory);
  const currentChapter = useSelector(selectCurrentChapter);

  const videoControlsRef = React.useRef<any>(null);

  const [currentUserSteps, setCurrentUserSteps] = React.useState<number>(
    currentChapter?.userSteps ?? 0
  );

  const handleDancePlayback = () => {
    if (gamePaused) {
      videoControlsRef.current.playVideo();
    } else {
      videoControlsRef.current.pauseVideo();
    }
    console.log("Dance paused?", gamePaused);
    setGamePaused(!gamePaused);
  };

  if (!currentStory || !currentChapter || !currentUser) return null;

  return (
    <>
      <GamePausedModal
        visible={gamePaused}
        onDismiss={handleDancePlayback}
        onQuitDance={() => setShowConfirmModal(true)}
      />
      <ConfirmModal
        visible={showConfirmModal}
        title="Are you sure?"
        body="You will lose some progress made."
        onDismiss={() => setShowConfirmModal(false)}
        onConfirm={() =>
          navigation.navigate("StoryScreen", { storyId: currentStory.id })
        }
      />
      <SolidBackground />
      <Screen>
        <Font spacing={1} variant="sm1" caps align="center">
          {currentStory.title}
        </Font>
        <Spacer h={10} />
        <Font variant="sm2" align="center">
          Chapter {currentChapter.order}
        </Font>
        <Spacer h={10} />
        <ContentContainer mb={30}>
          <DanceVideoContainer size="lg">
            <VideoViewExtended
              ref={videoControlsRef}
              onVideoFinished={() => null}
              onVideoHalfwayFinished={() => null}
              loop
              videoUrl={currentChapter.videoUrl}
            />
          </DanceVideoContainer>
        </ContentContainer>
        <DanceStatsContainer>
          <DanceStatsItem
            description={`of ${currentChapter.targetSteps} movements`}
            value={currentUserSteps}
          />
          <Spacer h={5} />
          <DanceStatsItem description="dance minutes left" value={0} />
        </DanceStatsContainer>
        <ButtonContainer>
          <RoundButton
            onPress={handleDancePlayback}
            icon={gamePaused ? "play" : "pause"}
          />
        </ButtonContainer>
      </Screen>
    </>
  );
};

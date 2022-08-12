import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { useCountdown } from "usehooks-ts";

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
import useStepCounter from "../../../../../app/src/hooks/useStepCounter";
import { AlertModal } from "../../../../../app/src/components/modals/AlertModal";
import { CHAPTER_DATA } from "../../../../../app/data/chapter_data";

type GameFinishType = "unfinished" | "inTime" | "timeElapsed" | "userQuit";

export const DanceScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StoryScreenNavType>();

  const [gameEndedType, setGameEndedType] =
    React.useState<GameFinishType>("unfinished");
  const [gamePaused, setGamePaused] = React.useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  const [showTimeUpModal, setShowTimeUpModal] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  const currentUser = useSelector(selectUser);
  const currentStory = useSelector(selectCurrentStory);
  const currentChapter = useSelector(selectCurrentChapter);

  if (!currentStory || !currentChapter || !currentUser) return null;

  const videoControlsRef = React.useRef<any>(null);

  const [currentUserSteps, setCurrentUserSteps] = React.useState<number>(
    currentChapter.userSteps
  );

  const timeLeftToDance = 20000;

  /**Step Counter */
  const {
    pedometerIsAvailable,
    startStepCounting,
    stopStepCounting,
    setStepCount,
    stepCount,
  } = useStepCounter();

  /** Timer */
  const [count, { start: startTimer, stop: stopTimer, reset: resetTimer }] =
    useCountdown({
      seconds: timeLeftToDance / 1000,
      interval: 1000,
      isIncrement: false,
    });

  /** Game Status Setter */
  React.useEffect(() => {
    // Check if the user has completed movements and there's still time left
    // Then set GameStatus as "Successfully completed"
    // Check if time ran out and the user hasn't completed movements
    // Then set GameStatus as "Ran out of time"
    // Just set the GameStatus as "Ongoing"
    if (count === 10) {
      videoControlsRef.current.pauseVideo();
      return setShowSuccessModal(true);
    }
    if (count === 0) {
      videoControlsRef.current.pauseVideo();
      return setShowTimeUpModal(true);
    }
  }, [count]);

  const startDance = () => {
    startTimer();
    startStepCounting();
    setCurrentUserSteps(stepCount);
  };

  const handleDancePlayback = () => {
    if (gamePaused) {
      videoControlsRef.current.playVideo();
    } else {
      videoControlsRef.current.pauseVideo();
    }
    setGamePaused(!gamePaused);
  };

  React.useEffect(() => {
    startDance();
  }, []);

  /** Handle Outcomes */
  const chaptersLength = CHAPTER_DATA.filter(
    (chapter) => chapter.storyId === currentStory.id
  ).length;
  const lastChapter = currentStory.order === chaptersLength;

  const handlePassChapter = () => {
    // check if this is last chapter in story
    if (lastChapter) return navigation.navigate("StoryFinish");
    return navigation.navigate("ChapterPass");
  };

  const handleFailChapter = () => {
    navigation.replace("ChapterFail");
  };

  if (!pedometerIsAvailable)
    return (
      <>
        <SolidBackground />
        <Screen>
          <Font>This device cannot record your body movements.</Font>
        </Screen>
      </>
    );
  return (
    <>
      <AlertModal
        visible={showTimeUpModal}
        body="Ooops!"
        title="You ran out of time!"
        dismissText="Continue"
        onDismiss={handleFailChapter}
      />
      <AlertModal
        visible={showSuccessModal}
        body="You've done the dance in time!"
        title="Great work!"
        dismissText="Continue"
        onDismiss={handlePassChapter}
      />
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
            value={stepCount}
          />
          <Spacer h={5} />
          <DanceStatsItem description="dance minutes left" value={count} />
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

import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { useInterval, useCountdown } from "usehooks-ts";

import { secondsToMinutes } from "date-fns";

import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import Spacer from "../../../../../app/src/components/elements/Spacer";
import {
  ButtonContainer,
  ContentContainer,
  DanceVideoContainer,
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
import { calculateDanceTimeFromBodyMovementsMS } from "../../../../../app/utils/formatters";
import { SaveUserDanceData } from "../../../../../app/store/reducers/story/thunks/save-user-dance-data";
import { SaveDanceDataType } from "../../../../../app/types/SaveDanceDataModel";
import useAnnouncer from "../../../../../app/src/hooks/useAnnouncer";
import useUnmount from "../../../../../app/src/hooks/useUnmount";

export const DanceScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StoryScreenNavType>();

  const [gamePaused, setGamePaused] = React.useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  const [showTimeUpModal, setShowTimeUpModal] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [timeDancedMS, setTimeDancedMS] = React.useState(0);

  const currentUser = useSelector(selectUser);
  const currentStory = useSelector(selectCurrentStory);
  const currentChapter = useSelector(selectCurrentChapter);

  if (!currentStory || !currentChapter || !currentUser) return null;

  const videoControlsRef = React.useRef<any>(null);

  const currentTargetDanceSteps = React.useMemo(() => {
    return currentChapter.targetSteps - currentChapter.userSteps;
  }, []);

  /** Calculators */
  const timeLeftToDance = React.useMemo(() => {
    return calculateDanceTimeFromBodyMovementsMS(currentTargetDanceSteps);
  }, [currentTargetDanceSteps]);

  //Calculate actual time spent by user in each session

  /** Step Counter */
  const {
    pedometerIsAvailable,
    startStepCounting,
    stopStepCounting,
    stepCount,
  } = useStepCounter();

  const { playAnnouncement } = useAnnouncer(
    currentChapter.targetSteps,
    stepCount
  );

  /** Timers */

  const [
    count,
    {
      startCountdown: startTimer,
      stopCountdown: stopTimer,
      resetCountdown: resetTimer,
    },
  ] = useCountdown({
    countStart: timeLeftToDance,
    countStop: 0,
    intervalMs: 1000,
  });

  useInterval(
    () => {
      setTimeDancedMS(timeDancedMS + 1000);
    },
    !gamePaused ? 1000 : null
  );

  /** Announcement */
  React.useEffect(() => {
    playAnnouncement();
  }, [stepCount + currentChapter.userSteps, currentChapter.targetSteps]);

  /** Game Status Setter */

  React.useEffect(() => {
    if (currentTargetDanceSteps === stepCount) {
      videoControlsRef.current.pauseVideo();
      stopTimer();
      stopStepCounting();
      return setShowSuccessModal(true);
    }
    if (count === 0) {
      videoControlsRef.current.pauseVideo();
      stopTimer();
      stopStepCounting();
      return setShowTimeUpModal(true);
    }
  }, [count, currentTargetDanceSteps, stepCount]);

  const startDance = () => {
    console.log("Game Started");
    startTimer();
    startStepCounting();
  };

  React.useEffect(() => {
    if (videoControlsRef && videoControlsRef.current) {
      if (gamePaused) {
        stopStepCounting();
        stopTimer();
        videoControlsRef.current.pauseVideo();
        console.log("game paused!");
      } else if (!gamePaused) {
        startStepCounting();
        startTimer();
        videoControlsRef.current.playVideo();
        console.log("game unpaused!");
      }
    }
  }, [gamePaused, videoControlsRef]);

  React.useEffect(() => {
    startDance();
  }, []);

  useUnmount(() => {
    console.log("UNMOUNTED");
    stopTimer();
    stopStepCounting();
    console.log("Stopped step counting");
    return;
  });

  /** Handle Outcomes */

  const handlePassChapter = async () => {
    const chaptersLength = CHAPTER_DATA.filter(
      (chapter) => chapter.storyId === currentStory.id
    ).length;

    await saveGame();

    const lastChapter = currentStory.order === chaptersLength;

    if (lastChapter) return navigation.navigate("StoryFinish");
    return navigation.navigate("ChapterPass");
  };

  const handleFailChapter = async () => {
    await saveGame();
    navigation.replace("ChapterFail");
  };

  const handleEndGame = async () => {
    await saveGame();
    // Save the user progress here
    navigation.navigate("StoryScreen", { storyId: currentStory.id });
  };

  const saveGame = async () => {
    const saveData = {} as SaveDanceDataType;

    saveData.timeDancedMS = timeDancedMS;
    saveData.userSteps = stepCount;
    /*
    // Find out game status --

    if (
      currentChapter.userSteps + sessionUserSteps ===
        currentChapter.targetSteps &&
      count > 0
    ) {
      saveData.timeDancedMS = timeDancedMS;
      saveData.userSteps = sessionUserSteps;
      // This means  user completed game in time
    } else if (count < 1) {
      // they ran out of time,
    } else {
      // or are they quitting in the middle of it
    }
    // Save userSteps at 0/25/75 percents of target to playedChapter, playedStory
    // Save actual userSteps to overallPerformance
    // Also save timeDanced to overallPerformance, playedStory, playedChapter
    */

    dispatch(
      SaveUserDanceData(
        currentUser.userId,
        currentChapter.id,
        currentStory.playedStoryId,
        saveData
      )
    );
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
        onDismiss={() => setGamePaused(!gamePaused)}
        onQuitDance={() => setShowConfirmModal(true)}
      />
      <ConfirmModal
        visible={showConfirmModal}
        title="Are you sure?"
        body="You will lose some progress made."
        onDismiss={() => setShowConfirmModal(false)}
        onConfirm={handleEndGame}
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
          {currentChapter.userSteps > 0 && (
            <>
              <Font align="center" variant="sm2" caps color="hilite_purpink">
                You did {currentChapter.userSteps} steps previously
              </Font>
              <Spacer />
            </>
          )}
          <DanceStatsItem
            description={`of ${currentTargetDanceSteps} movements`}
            value={stepCount}
          />
          <Spacer h={5} />
          <DanceStatsItem
            description={`dance ${count > 60 ? "minutes" : "seconds"} left`}
            value={count > 60 ? secondsToMinutes(count) : count}
          />
        </DanceStatsContainer>
        <ButtonContainer>
          <RoundButton
            onPress={() => setGamePaused(!gamePaused)}
            icon={gamePaused ? "play" : "pause"}
          />
        </ButtonContainer>
      </Screen>
    </>
  );
};

import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import * as React from "react";
import { Placer } from "../../../../src/components/elements/Placer";
import { IconButton } from "../../../../src/components/buttons/IconButton";
import { useNavigation } from "@react-navigation/native";
import { StoryIntroScreenNavType } from "../../../../src/navigator/types";
import { FontConstrainer, VideoContainer } from "./styled";
import { LargeButton } from "../../../../src/components/buttons/LargeButton";
import { VertiCard } from "../../../../src/components/cards/VertiCard";
import { VideoView } from "../../../../src/components/video/VideoView";

interface Props {
  route: { params: { storyId: string } };
}

export const StoryIntroScreen: React.FC<Props> = ({ route }) => {
  const { storyId } = route.params;

  const navigation = useNavigation<StoryIntroScreenNavType>();

  const handleGoBack = () => {
    // set currentStory to null.... THEN
    navigation.navigate("Home");
  };

  return (
    <>
      <SolidBackground />
      <Screen>
        <Placer top={2} left={3}>
          <IconButton onPress={handleGoBack} />
        </Placer>
        <FontConstrainer>
          <Font align="center" variant="h2" color="light">
            Afia's Wedding
          </Font>
        </FontConstrainer>
        <VideoContainer size="sm">
          <VideoView
            onVideoFinished={() => console.log("Video finished")}
            onVideoHalfwayFinished={() => console.log("Video halfway finished")}
            loop
          />
        </VideoContainer>
        <Font align="center" variant="p" color="light">
          You have to help Afia achieve her goals so that she can be happy and
          then you can be fit!
        </Font>
        <VertiCard value1={1} value2={2} value3={3}></VertiCard>
        <LargeButton
          title="Start story"
          onPress={() => console.log("Story started!")}
        />
      </Screen>
    </>
  );
};

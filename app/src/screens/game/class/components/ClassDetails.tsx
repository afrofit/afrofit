import { Card } from "../../../../../../app/src/components/cards/Card";
import Spacer from "../../../../../../app/src/components/elements/Spacer";
import { Font } from "../../../../../../app/src/components/font/Font";
import { SolidBackground } from "../../../../../../app/src/components/screen/SolidBackground";
import { ResizeMode, Video } from "expo-av";
import {
  BackgroundEventVideoStyles,
  EventDetailsImage,
  EventListWrapper,
  EventStyledScreen,
} from "../../event/styled";
import APP_SETTINGS from "../../../../../config/settings";
import { Screen } from "../../../../../../app/src/components/screen/Screen";
import { useNavigation } from "@react-navigation/native";
import { Placer } from "../../../../../../app/src/components/elements/Placer";
import { IconButton } from "../../../../../../app/src/components/buttons/IconButton";
import * as React from "react";
import LottieView from "lottie-react-native";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";
import { windowHeight, windowWidth } from "../../../../../../app/utils/constant";
import { ClassDetailsCard } from "../../../../../../app/src/components/cards/ClassDetailsCard";
interface Props {
  route: { params: { item: any } };
}

export const ClassDetails: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<any>();
  const { item } = route.params;
  const video = React.useRef(null);

  let animationRef: LottieView | null;

  React.useEffect(() => {
    animationRef && animationRef.play();
  }, []);

  return (
    <>
      <SolidBackground/>
      <Spacer h={20} />
      <EventStyledScreen>
        <Screen>
          <Placer top={1} left={3}>
            <IconButton onPress={() => navigation.goBack()} />
          </Placer>
          <Font variant="p" align="center" color="light">
            Class Details
          </Font>
          <Spacer h={10} />
          <EventListWrapper contentContainerStyle={{ paddingBottom: 30 }}>
            <ClassDetailsCard>
              <Font variant={"h2"} align="center">
                {item?.title}
              </Font>
              <Spacer h={15} />
              <EventDetailsImage
                source={{
                  uri: `${APP_SETTINGS.apiUrl.replace("api/", "")}${
                    item?.imageUrl
                  }`,
                }}
                resizeMode={"contain"}
                style={{ alignSelf: "center" }}
              />
              <Spacer h={7} />
              <Font variant={"h4"}>{item?.description}</Font>
              <Spacer h={25} />
              <YoutubePlayer
              height={windowHeight/4}
              width={windowWidth-80}
              videoId={item?.videoUrl}
               />
             </ClassDetailsCard>
          </EventListWrapper>
        </Screen>
      </EventStyledScreen>
    </>
  );
};

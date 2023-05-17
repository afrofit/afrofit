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
import { ActivityIndicator } from "react-native";
import { COLORS } from "../../../../../../app/theme/globals";
import convertToProxyURL from 'react-native-video-cache';


interface Props {
  route: { params: { item: any } };
}

export const ClassDetails: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation();
  const [isPreloading, setIsPreloading] = React.useState(false);
  const [status, setStatus]: any = React.useState({});
  const [error, setError]: any = React.useState({});
  const { item } = route.params;
  const video = React.useRef(null);

  let animationRef: LottieView | null;

  React.useEffect(() => {
    animationRef && animationRef.play();
  }, []);


  return (
    <>
      <SolidBackground />
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
            <Card>
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
              <Font variant={"sm1"}>{item?.description}</Font>
              <Spacer h={25} />

              {item?.videoUrl != null ? (
                <>
                  {isPreloading && (
                    <LottieView
                      autoPlay
                      loop={true}
                      source={require("../../../../../assets/animations/loading.json")}
                      style={{
                        ...BackgroundEventVideoStyles.video,
                        position: "absolute",
                        bottom: 10,
                      }}
                    />
                  )}
                  {status?.isBuffering  && !status?.isPlaying  && !status?.didJustFinish && (
                     <ActivityIndicator
                     size={"large"}
                     color={COLORS.hilite_orange}
                      style={{...BackgroundEventVideoStyles.video,position: "absolute",bottom:10,zIndex:2222}}  
                      />
                    )}
                  <Video
                    ref={video}
                      style={{...BackgroundEventVideoStyles.video,zIndex:1111}}
                      source={{uri: convertToProxyURL(item?.videoUrl)}}                      
                      shouldPlay={true}
                      useNativeControls={isPreloading ? false : true}
                      resizeMode={ResizeMode.CONTAIN}
                      onLoadStart={() => setIsPreloading(true)}
                      onReadyForDisplay={() => setIsPreloading(false)}
                      onPlaybackStatusUpdate={status=>setStatus(()=>status)}
                      onError={(status=>setError(()=>status))}
                       />
                 

                     </>
              ) : null}
            </Card>
          </EventListWrapper>
        </Screen>
      </EventStyledScreen>
    </>
  );
};

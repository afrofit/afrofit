import Spacer from "../../../../../../app/src/components/elements/Spacer";
import { Font } from "../../../../../../app/src/components/font/Font";
import { SolidBackground } from "../../../../../../app/src/components/screen/SolidBackground";
import {
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
import YoutubePlayer from "react-native-youtube-iframe";
import {
  windowHeight,
  windowWidth,
} from "../../../../../../app/utils/constant";
import { ClassDetailsCard } from "../../../../../../app/src/components/cards/ClassDetailsCard";
import { MediumButton } from "../../../../../../app/src/components/buttons/MediumButton";
import { Linking } from "react-native";
interface Props {
  route: { params: { item: any } };
}

export const ClassDetails: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<any>();
  const { item } = route.params;
  const video = React.useRef(null);
  const [videoId, setVideoId] = React.useState(null);

  let animationRef: LottieView | null;

  
  React.useEffect(() => {
    animationRef && animationRef.play();
    getVideoId();
  }, []);

  const getVideoId = () => {
    var urlRegExp =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    var matchUrl = item?.videoUrl.match(urlRegExp);
    if (matchUrl !== null) {
      var regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      var match = item?.videoUrl.match(regExp);
      console.log(match)
      if (match && match[7].length==11) {
        setVideoId(match[7]);
      }else{
        setVideoId(null);
      }
    } else {
      setVideoId(item?.videoUrl);
    }
  };

  const onClick=()=>{
    Linking.openURL('http://161.97.170.81:9091/challenge');
  }


  return (
    (
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
              <ClassDetailsCard>
                <Font variant={"h2"} >
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
                />
                <Spacer h={7} />
                <Font variant={"sm1"}>{item?.description}</Font>
                <Spacer h={25} />
               <MediumButton  onPress={()=>onClick()} title="JOIN CHALLENGE" />
              <Spacer h={25} />
                {videoId && videoId !== null ? (
                  <YoutubePlayer
                    height={windowHeight / 4}
                    width={windowWidth - 80}
                    videoId={videoId}
                  />
                ) : null}
              </ClassDetailsCard>
            </EventListWrapper>
          </Screen>
        </EventStyledScreen>
      </>
    )
  );
};

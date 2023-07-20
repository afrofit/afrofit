import { Font } from "../../../../../src/components/font/Font";
import * as React from "react";
import { Card } from "../../../../../src/components/cards/Card";
import {
  BackgroundEventVideoStyles,
  EventDetailsImage,
  EventDetailsView,
  EventLink,
  EventLinkView,
  EventListWrapper,
  EventStyledScreen,
} from "../styled";
import APP_SETTINGS from "../../../../../config/settings";
import Spacer from "../../../../components/elements/Spacer";
import { VideoView } from "../../../../../src/components/video/VideoView";
import { SolidBackground } from "../../../../../src/components/screen/SolidBackground";
import { Screen } from "../../../../../src/components/screen/Screen";
import { ResizeMode, Video } from "expo-av";
import { Placer } from "../../../../../../app/src/components/elements/Placer";
import { IconButton } from "../../../../../../app/src/components/buttons/IconButton";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import * as Linking from 'expo-linking';

interface Props {
  route: { params: { item: any } };
}

export const EventDetails: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation();
  const [isPreloading, setIsPreloading] = React.useState(false);
  const { item } = route.params;

  const openURL=(link:any)=>{
    Linking.openURL(link)
  }


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
            Events Details
          </Font>
          <Spacer h={10} />
          <EventListWrapper contentContainerStyle={{ paddingBottom: 30 }}>
            <Card>
              <Font variant={"h2"}>
                {item?.title}
              </Font>
              <Spacer h={15} />
              {item?.imageUrl != null ? (
                <EventDetailsImage
                  source={{
                    uri: `${APP_SETTINGS.apiUrl.replace("api/", "")}${
                      item?.imageUrl
                    }`,
                  }}
                  resizeMode={"contain"}
                  style={{ alignSelf: "center" }}
                />
              ) : null}

              <Spacer h={7} />
              <Font variant={"sm1"}>{item?.description}</Font>
              <Spacer h={15} />
              {item?.paymentLinks ?  <EventLink onPress={()=>openURL(item?.paymentLinks)}>
              <Font variant={"smb"} >
               Payment link:
              </Font>
              <EventLinkView>
              <Font variant={"smb"} color="fuschia" underline={"underline"} numberOfLines={3}>
               {item?.paymentLinks}
              </Font>
              </EventLinkView>
              </EventLink> : null}
            
              {item?.videoUrl != null ? (
                <>
                  {isPreloading && (
                   <LottieView
                   autoPlay
                   loop={true}
                   source={require("../../../../../assets/animations/loading.json")}
                   style={{...BackgroundEventVideoStyles.video,position: "absolute",bottom:10}}  
                   />
                  )}
                  <Video
                    style={BackgroundEventVideoStyles.video}
                    source={{ uri: item?.videoUrl }}
                    resizeMode={ResizeMode.CONTAIN}
                    shouldPlay={true}
                    useNativeControls={isPreloading ? false : true}
                    onLoadStart={() => setIsPreloading(true)}
                    onReadyForDisplay={() => setIsPreloading(false)}
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

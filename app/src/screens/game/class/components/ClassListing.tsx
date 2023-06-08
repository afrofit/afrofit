import { Font } from "../../../../../src/components/font/Font";
import * as React from "react";
import { Card } from "../../../../../src/components/cards/Card";
import APP_SETTINGS from "../../../../../config/settings";
import Spacer from "../../../../components/elements/Spacer";
import { useNavigation } from "@react-navigation/native";
import {
  EventClassAntDesignIcon,
  EventClassFirstView,
  EventClassSecondView,
  EventClassVideoPreview,
  EventClassView,
  EventDetailsImage,
  EventListWrapper,
  EventPressable,
} from "../../event/styled";
import { ResizeMode, Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { Image, View } from "react-native";

interface Props {
  allClass?: any;
}

export const ClassList: React.FC<Props> = ({ allClass }) => {
  const navigation = useNavigation<any>();

  return (
    <EventListWrapper>
      {allClass && allClass.length > 0 ? (
        allClass.map((item: any) => {
          console.log(item?.imageUrl);
          return (
            <>
              <Card disablePadding>
                <EventPressable
                  onPress={() => navigation.navigate("ClassDetails", { item })}
                >
                  <EventClassView>
                    <EventClassFirstView>
                        <Image
                          source={{
                            uri: `${APP_SETTINGS.apiUrl.replace("api/", "")}${
                              item?.imageUrl
                            }`,
                          }}
                          resizeMode={"center"}
                          style={{
                            alignSelf: "center",
                            height: 130,
                            width: 130,
                          }}
                        />
                    </EventClassFirstView>
                    <EventClassSecondView  style={{paddingHorizontal:10}} > 
                      <Font variant={"h2"} numberOfLines={1} > 
                        {item?.title}
                      </Font>
                      <Spacer h={7} />
                      <Font variant={"sm1"} numberOfLines={3}>
                        {item?.description}
                      </Font>
                    </EventClassSecondView>
                  </EventClassView>
                </EventPressable>
              </Card>
            </>
          );
        })
      ) : (
        <>
          <Spacer h={20} />
          <Font variant="p">There are presently no Classes.</Font>
        </>
      )}
    </EventListWrapper>
  );
};

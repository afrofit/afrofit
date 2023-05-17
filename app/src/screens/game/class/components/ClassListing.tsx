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
  EventListWrapper,
  EventPressable,
} from "../../event/styled";
import { ResizeMode, Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  allClass?: any;
}

export const ClassList: React.FC<Props> = ({ allClass }) => {
  const navigation = useNavigation<any>();

  return (
    <EventListWrapper>
      {allClass && allClass.length > 0 ? (
        allClass.map((item: any) => {
          return (
            <>
              <Card disablePadding>
                <EventPressable
                  onPress={() => navigation.navigate("ClassDetails", { item })}
                >
                  <EventClassView>
                    <EventClassFirstView>
                      <Video
                        style={
                          EventClassVideoPreview.video
                        }
                        source={{uri:item?.videoUrl}}
                        resizeMode={ResizeMode.STRETCH}
                        shouldPlay={false}
                      />
                      <AntDesign
                        name="caretright"
                        size={30}
                        color="white"
                        style={EventClassAntDesignIcon.icon}
                      />
                    </EventClassFirstView>
                    <EventClassSecondView>
                      <Font variant={"h2"} numberOfLines={1}>
                        {item.title}
                      </Font>
                      <Spacer h={7} />
                      <Font variant={"sm1"} numberOfLines={3}>
                        {item.description}
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

import { Font } from "../../../../../src/components/font/Font";
import { EventModel } from "app/types/EventModel";
import * as React from "react";
import { Card } from "../../../../../src/components/cards/Card";
import {
  EventClassAntDesignIcon,
  EventClassFirstView,
  EventClassSecondView,
  EventClassVideoPreview,
  EventClassView,
  EventListWrapper,
  EventPressable,
} from "../styled";
import APP_SETTINGS from "../../../../../config/settings";
import Spacer from "../../../../components/elements/Spacer";
import { useNavigation } from "@react-navigation/native";
import { ResizeMode, Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  allevent?: EventModel[] | null | any;
}

export const EventList: React.FC<Props> = ({ allevent }) => {
  const navigation = useNavigation<any>();

  return (
    <EventListWrapper>
      {allevent && allevent.length > 0 ? (
        allevent.map((item: any) => {
          return (
            <>
              <Card disablePadding>
                <EventPressable
                  onPress={() => navigation.navigate("EventDetails", { item })}
                >
                  <EventClassView>
                    {item?.videoUrl != null ? (
                      <EventClassFirstView>
                        <Video
                          style={EventClassVideoPreview.video}
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
                    ) : null} 
                    
                    <EventClassSecondView
                      style={{ width: item?.videoUrl != null ? "60%" : "90%" }}
                    >
                      <Font variant={"h2"} numberOfLines={1}>
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
          <Font variant="p">There are presently no Events.</Font>
        </>
      )}
    </EventListWrapper>
  );
};

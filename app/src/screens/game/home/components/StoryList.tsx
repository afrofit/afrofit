import { ColorType } from "../../../../../theme/globals";
import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "../../../../../src/components/cards/Card";
import { Font } from "../../../../../src/components/font/Font";
import {
  ItemWrapper,
  LabelWrapper,
  ListWrapper,
  NumWrapper,
} from "./ActivityTodayList.styled";
import {
  CardContentWrapper,
  CardImage,
  StoryListWrapper,
  TagWrapper,
} from "./StoryList.styled";
import Spacer from "../../../../../src/components/elements/Spacer";
import { Placer } from "../../../../../src/components/elements/Placer";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Afia's Wedding",
    value: "98% complete",
    color: "hilite_orange",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Frank's Return",
    value: "96% complete",
    color: "purple_100",
  },
  {
    id: "3ac68afc-c6as-48d3-a4f8-fbd91aa97f63",
    title: "Ellie's Chance",
    value: "Not started",
    color: "hilite_purpink",
  },
  {
    id: "3ac68afc-c6as-48d3-ass8-fbd91aa97f63",
    title: "Golden's Way",
    value: "Not started",
    color: "hilite_pink",
  },
];

export const StoryList = () => {
  return (
    <StoryListWrapper showsVerticalScrollIndicator={false}>
      {DATA.map((data, index: number) => {
        return (
          <Card
            marginBottom={10}
            disablePadding
            key={data.id}
            outlined={false}
            bgColor={data.color as ColorType}
            onPress={() => console.log("This card pressed!" + data.id)}
          >
            <CardContentWrapper>
              <Placer left={-5}>
                <CardImage
                  source={require("../../../../../assets/images/art/sample.png")}
                />
              </Placer>
              <TagWrapper>
                <Font variant="sm2" color="lightblue" caps>
                  {data.value}
                </Font>
              </TagWrapper>
              <Spacer h={10} />
              <Font variant="h3" color="dark">
                {data.title}
              </Font>
            </CardContentWrapper>
          </Card>
        );
      })}
    </StoryListWrapper>
  );
};

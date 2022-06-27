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

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "calories burned",
    value: "2.1K",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "body movements",
    value: "100",
  },
];

export const ActivityTodayList = () => {
  return (
    <ListWrapper>
      {DATA.map((data, index: number) => {
        return (
          <Card
            marginBottom={0.1}
            disablePadding
            key={data.id}
            outlined={false}
            isSquare
          >
            <ItemWrapper last={index + 1 === DATA.length}>
              <NumWrapper>
                <Font variant="h3" color="hilite_purpink" caps>
                  {data.value}
                </Font>
              </NumWrapper>
              <LabelWrapper>
                <Font variant="p" color="lightblue">
                  {data.title}
                </Font>
              </LabelWrapper>
            </ItemWrapper>
          </Card>
        );
      })}
    </ListWrapper>
  );
};

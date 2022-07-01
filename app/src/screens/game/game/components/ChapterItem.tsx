import * as React from "react";
import { Feather } from "@expo/vector-icons";

import { Card } from "../../../../components/cards/Card";
import { Font } from "../../../../components/font/Font";
import {
  IconWrapper,
  ItemWrapper,
  LabelWrapper,
  NumWrapper,
} from "./ChapterList.styled";
import { COLORS } from "../../../../../theme/globals";

interface ItemProps {
  outlined?: boolean;
  isSquare?: boolean;
  first?: boolean;
  last?: boolean;
  title: string;
  value: number;
  onPress: () => void;
}

export const ChapterItem: React.FC<ItemProps> = ({
  outlined,
  isSquare,
  first,
  last,
  title,
  value,
  onPress,
}) => {
  return (
    <Card
      marginBottom={0.1}
      disablePadding
      outlined={outlined}
      isSquare={isSquare}
      first={first}
      last={last}
    >
      <ItemWrapper first={true} last={false} onPress={onPress}>
        <LabelWrapper>
          <Font variant="p" color="lightblue">
            {title}
          </Font>
        </LabelWrapper>
        <NumWrapper>
          {value ? (
            <Font variant="h3" color="hilite_purpink" caps>
              {value} %
            </Font>
          ) : (
            <IconWrapper>
              <Feather name={"lock"} size={25} color={COLORS.lightblue} />
            </IconWrapper>
          )}
        </NumWrapper>
      </ItemWrapper>
    </Card>
  );
};

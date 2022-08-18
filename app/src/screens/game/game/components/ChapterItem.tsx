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
  value?: number | null;
  disabled?: boolean;
  onPress: () => void;
  completed?: boolean;
}

export const ChapterItem: React.FC<ItemProps> = ({
  outlined,
  isSquare,
  first,
  last,
  title,
  value = 0,
  disabled = true,
  completed = false,
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
      <ItemWrapper
        first={true}
        last={false}
        onPress={onPress}
        disabled={disabled}
      >
        <LabelWrapper>
          <Font variant="p" color={disabled ? "gray_100" : "lightblue"}>
            {title}
          </Font>
        </LabelWrapper>
        <NumWrapper>
          {!disabled ? (
            <Font variant="h3" color="hilite_purpink" caps>
              {value} %
            </Font>
          ) : (
            <IconWrapper>
              {!completed ? (
                <Feather
                  name={"lock"}
                  size={25}
                  color={COLORS.hilite_purpink}
                />
              ) : (
                <Feather name={"check"} size={25} color={COLORS.lightblue} />
              )}
            </IconWrapper>
          )}
        </NumWrapper>
      </ItemWrapper>
    </Card>
  );
};

import * as React from "react";
import { Feather } from "@expo/vector-icons";

import { Card } from "../../../../components/cards/Card";
import { Font } from "../../../../components/font/Font";

import {
  KeyContainer,
  StatsStack,
  ValueContainer,
} from "./ProfileStatsItem.styled";
import { formattedStat } from "../../../../../../app/utils/formatters";

interface ItemProps {
  description: string;
  value: number;
}

export const ProfileStatsItem: React.FC<ItemProps> = ({
  description,
  value,
}) => {
  return (
    <Card marginBottom={0.1} disablePadding outlined={true} isSquare={false}>
      <StatsStack padding={10}>
        <ValueContainer>
          <Font color="hilite_orange" variant="h3">
            {formattedStat(value)}
          </Font>
        </ValueContainer>
        <KeyContainer>
          <Font color="lightblue">{description}</Font>
        </KeyContainer>
      </StatsStack>
    </Card>
  );
};

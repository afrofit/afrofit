import * as React from "react";
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
  status:boolean
}

export const SubscriptionStatus: React.FC<ItemProps> = ({
  description,
  status
}) => {
  return (
    <Card marginBottom={0.1} disablePadding outlined={true} isSquare={false}>
      <StatsStack padding={10}>
        <ValueContainer>
          <Font color="hilite_orange" variant="h4">
           {
            status===false ? "Inactive" : "Active" 
           }    
          </Font>
        </ValueContainer>
        <KeyContainer>
          <Font color="lightblue">{description}</Font>
        </KeyContainer>
      </StatsStack>
    </Card>
  );
};

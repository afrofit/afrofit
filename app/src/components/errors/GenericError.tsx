import * as React from "react";
import { Card } from "../cards/Card";
import { Font } from "../font/Font";
import { Feather } from "@expo/vector-icons";

import {
  GenericErrorContentsWrapper,
  GenericErrorWrapper,
  StartIconContainer,
  EndIconContainer,
} from "./styled";
import { COLORS } from "../../../theme/globals";

interface Props {
  message?: string;
  visible?: boolean;
  onDismissWarning: () => {};
}

export const GenericError: React.FC<Props> = ({
  visible = false,
  message,
  onDismissWarning,
}) => {
  if (!visible) return null;
  return (
    <GenericErrorWrapper>
      <Card padding={10} outlined bgColor="hilite_pink" bdColor="fuschia">
        <GenericErrorContentsWrapper>
          <StartIconContainer>
            <Feather name={"alert-triangle"} size={25} color={COLORS.fuschia} />
          </StartIconContainer>
          <Font variant="sm1">{message}</Font>
          <EndIconContainer onClick={onDismissWarning}>
            <Feather name={"x"} size={25} color={COLORS.fuschia} />
          </EndIconContainer>
        </GenericErrorContentsWrapper>
      </Card>
    </GenericErrorWrapper>
  );
};

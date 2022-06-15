import * as React from "react";
import { ColorType } from "../../../theme/color";
import { StyledSolidBackground } from "./styled";

interface Props {
  color?: ColorType;
  opacity?: number;
}

export const SolidBackground: React.FC<Props> = ({
  color = "black",
  opacity = 1,
}) => {
  return <StyledSolidBackground color={color} opacity={opacity} />;
};

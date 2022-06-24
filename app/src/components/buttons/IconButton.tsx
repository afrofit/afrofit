import Feather from "@expo/vector-icons/Feather";
import { COLORS, ColorType } from "../../../theme/globals";
import React from "react";
import { StyledIconButton } from "./styled";

interface Props {
  icon?: string;
  onPress: () => void;
  color?: ColorType;
}
export const IconButton: React.FC<Props> = ({
  icon = "arrow-left-circle",
  onPress,
  color = "lightblue",
}) => {
  return (
    <StyledIconButton onPress={onPress}>
      <Feather name={icon} size={50} color={COLORS[color]} />
    </StyledIconButton>
  );
};

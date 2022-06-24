import * as React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyledGenericButton, StyledClearButton } from "./styled";
import { Font } from "../font/Font";
import { COLORS, ColorType } from "../../../theme/globals";
import { ButtonVariantsType } from "./types";

interface Props {
  onPress: () => void;
  title: string;
  color?: ColorType;
}

export const ClearButton: React.FC<Props> = ({
  onPress,
  title,
  color = "light",
}) => {
  return (
    <StyledClearButton onPress={onPress}>
      <Font variant="sm2" color={color}>
        {title}
      </Font>
    </StyledClearButton>
  );
};

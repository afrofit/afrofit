import { ButtonVariantsType, BUTTON_VARIANTS } from "./types";
import { CHAMFER, CHAMFER_BIG, COLORS } from "./../../../theme/globals";
import styled from "styled-components/native";

type Props = {
  variant?: ButtonVariantsType;
};

export const StyledLargeButton = styled.Pressable<Props>`
  width: 100%;
  height: 60px;
  border-radius: ${CHAMFER};
  overflow: hidden;
  border-width: ${({ variant }) =>
    variant && variant === "outlined" ? "1px" : 0};
  border-color: ${COLORS.lightblue};
`;

export const StyledClearButton = styled.Pressable<Props>`
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const StyledSmallButton = styled.Pressable<Props>`
  width: 160px;
  height: 50px;
  border-radius: ${CHAMFER_BIG};
  overflow: hidden;
  border-width: ${({ variant }) =>
    variant && variant === "outlined" ? "1px" : 0};
  border-color: ${COLORS.lightblue};
`;

export const StyledRoundButton = styled.Pressable<Props>`
  width: 100px;
  height: 100px;
  border-radius: ${CHAMFER_BIG};
  overflow: hidden;
  border-width: ${({ variant }) =>
    variant && variant === "outlined" ? "1px" : 0};
  border-color: ${COLORS.lightblue};
`;

export const StyledIconButton = styled.Pressable<Props>`
  padding: 10px;
`;

export const StyledGenericButton = styled.View<Props>`
  justify-content: center;
  align-items: center;
  background-color: ${({ variant }) =>
    variant ? BUTTON_VARIANTS[variant].bg : "red"};
  width: 100%;
  height: 100%;
`;

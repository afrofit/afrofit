import { CHAMFER, COLORS, ColorType } from "../../../theme/globals";
import styled from "styled-components/native";

interface Props {
  bdColor?: ColorType;
  bgColor?: ColorType;
  disablePadding?: boolean;
}

export const CardWrapper = styled.View<Props>`
  width: 100%;
  background-color: ${({ bgColor }) =>
    bgColor ? COLORS[bgColor] : COLORS.gray_200};
  min-height: 30px;
  border-radius: ${CHAMFER};
  border-width: 1px;
  border-color: ${({ bdColor }) =>
    bdColor ? COLORS[bdColor] : COLORS.lightblue};
  padding: ${({ disablePadding }) => (disablePadding ? 0 : "20px")};
  margin-bottom: 20px;
`;

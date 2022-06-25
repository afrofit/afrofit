import { CHAMFER, COLORS, ColorType } from "../../../theme/globals";
import styled from "styled-components/native";

interface Props {
  bdColor?: ColorType;
  bgColor?: ColorType;
  disablePadding?: boolean;
  outlined?: boolean;
  padding?: number;
}

export const CardWrapper = styled.View<Props>`
  width: 100%;
  background-color: ${({ bgColor }) =>
    bgColor ? COLORS[bgColor] : COLORS.gray_300};
  min-height: 30px;
  border-radius: ${CHAMFER};
  border-width: ${({ outlined }) => (outlined ? "1px" : 0)};
  border-color: ${({ bdColor }) =>
    bdColor ? COLORS[bdColor] : COLORS.lightblue};
  padding: ${({ disablePadding, padding }) =>
    disablePadding && !padding
      ? 0
      : !disablePadding && padding
      ? `${padding}px`
      : "20px"};
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
`;

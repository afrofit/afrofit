import { CHAMFER, COLORS, ColorType } from "../../../theme/globals";
import styled from "styled-components/native";

interface Props {
  bdColor?: ColorType;
  bgColor?: ColorType;
  disablePadding?: boolean;
  outlined?: boolean;
  padding?: number;
  centeredContent?: boolean;
  flexDirection?: "row" | "column";
  marginBottom?: number;
  isSquare?: boolean;
}

export const CardWrapper = styled.View<Props>`
  width: 100%;
  background-color: ${({ bgColor }) =>
    bgColor ? COLORS[bgColor] : COLORS.gray_300};
  min-height: 30px;
  border-radius: ${({ isSquare }) => (isSquare ? 0 : CHAMFER)};
  border-width: ${({ outlined }) => (outlined ? "1px" : 0)};
  border-color: ${({ bdColor }) =>
    bdColor ? COLORS[bdColor] : COLORS.lightblue};
  padding: ${({ disablePadding, padding }) =>
    disablePadding && !padding
      ? 0
      : !disablePadding && padding
      ? `${padding}px`
      : "20px"};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : "20px"};
  overflow: hidden;
  position: relative;
  justify-content: ${({ centeredContent }) =>
    centeredContent ? "center" : "flex-start"};
  align-items: ${({ centeredContent }) =>
    centeredContent ? "center" : "flex-start"};
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

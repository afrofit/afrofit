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
  first?: boolean;
  last?: boolean;
  opacity?: number;
}

export const CardWrapper = styled.View<Props>`
  width: 100%;
  background-color: ${({ bgColor }) =>
    bgColor ? COLORS[bgColor] : COLORS.gray_300};
  min-height: 30px;
  border-top-left-radius: ${({ isSquare, first, last }) =>
    isSquare && first
      ? CHAMFER
      : isSquare && last
      ? 0
      : isSquare && !last && !first
      ? 0
      : CHAMFER};
  border-top-right-radius: ${({ isSquare, first, last }) =>
    isSquare && first
      ? CHAMFER
      : isSquare && last
      ? 0
      : isSquare && !last && !first
      ? 0
      : CHAMFER};
  border-bottom-left-radius: ${({ isSquare, first, last }) =>
    isSquare && first
      ? 0
      : isSquare && last
      ? CHAMFER
      : isSquare && !last && !first
      ? 0
      : CHAMFER};
  border-bottom-right-radius: ${({ isSquare, first, last }) =>
    isSquare && first
      ? 0
      : isSquare && last
      ? CHAMFER
      : isSquare && !last && !first
      ? 0
      : CHAMFER};
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
  opacity: ${({ opacity }) => opacity ?? 1};
`;

export const Tappable = styled.Pressable`
  width: 100%;
`;

/* VertiCard */
export const VertiCardWrapper = styled.View`
  width: 100%;
  background-color: ${COLORS.gray_300};
  height: 110px;
  border-radius: ${CHAMFER};
  border-width: 1px;
  border-color: ${COLORS.lightblue};
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: row;
  overflow: hidden;
`;

interface VertiCardChildProps {
  middle?: boolean;
  first?: boolean;
  last?: boolean;
}

export const VertiCardChild = styled.View<VertiCardChildProps>`
  flex: 1;
  border-color: ${COLORS.lightblue};
  border-left-width: ${({ middle }) => (middle ? "1px" : 0)};
  border-right-width: ${({ middle }) => (middle ? "1px" : 0)};
  border-bottom-left-radius: ${({ first }) => (first ? CHAMFER : 0)};
  border-bottom-right-radius: ${({ last }) => (last ? CHAMFER : 0)};
  border-top-left-radius: ${({ first }) => (first ? CHAMFER : 0)};
  border-top-right-radius: ${({ last }) => (last ? CHAMFER : 0)};
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

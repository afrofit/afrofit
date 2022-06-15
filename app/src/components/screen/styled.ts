import { COLORS, ColorType } from "./../../../theme/color";
import styled from "styled-components/native";

export const StyledImageBackground = styled.Image`
  resize-mode: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  flex: 1;
  z-index: -12;
`;

export const StyledSolidBackground = styled.View<{
  color?: ColorType;
  opacity?: number;
}>`
  flex: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${({ color }) => (color ? COLORS[color] : COLORS["black"])};
  z-index: -10;
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`;

export const StyledScreen = styled.View`
  flex: 1;
  padding: 20px;
  background: transparent;
`;

export const StyledSafeArea = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  width: 100%;
`;

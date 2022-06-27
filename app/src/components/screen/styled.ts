import { COLORS, ColorType } from "../../../theme/globals";
import styled from "styled-components/native";
import { Platform } from "react-native";

export const StyledSolidBackground = styled.View<{
  color?: ColorType;
  opacity?: number;
}>`
  flex: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${({ color }) => (color ? COLORS[color] : COLORS["dark"])};
  z-index: -10;
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`;

export const StyledScreen = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: ${Platform.OS === "ios" ? "20px" : "40px"};
  background: transparent;
  position: relative;

  width: 100%;
`;

export const StyledSafeArea = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  width: 100%;
`;

interface Props {
  percentage?: number;
}

export const MarkerComponent = styled.View<Props>`
  width: 100%;
  height: ${({ percentage }) => (percentage ? `${percentage}%` : "50%")};
  padding-top: 20px;
  padding-bottom: 20px;
`;

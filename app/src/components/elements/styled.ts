import styled from "styled-components/native";
import { Platform } from "react-native";

interface Props {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

const PLATFORM_EXTRA = Platform.OS === "android" ? 2 : 0;

export const PlacerWrapper = styled.View<Props>`
  position: absolute;
  top: ${({ top }) => (top ? `${top + PLATFORM_EXTRA}%` : 0)};
  bottom: ${({ bottom }) => (bottom ? `${bottom + PLATFORM_EXTRA}%` : 0)};
  left: ${({ left }) => (left ? `${left + PLATFORM_EXTRA}%` : 0)};
  right: ${({ right }) => (right ? `${right + PLATFORM_EXTRA}%` : 0)};
  z-index: 10;
`;

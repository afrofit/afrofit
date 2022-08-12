import { CHAMFER } from "./../../../../theme/globals";
import { COLORS, CHAMFER_BIG } from "../../../../theme/globals";
import styled from "styled-components/native";

export const FontConstrainer = styled.View`
  width: 65%;
  align-self: center;
`;

interface VideoContainerProps {
  size: "lg" | "sm";
}
export const VideoContainer = styled.View<VideoContainerProps>`
  height: 40%;
  width: 80%;
  background-color: ${COLORS.lightblue};
  border-radius: ${CHAMFER_BIG};
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const DanceVideoContainer = styled.View<VideoContainerProps>`
  height: 100%;
  width: 80%;
  background-color: ${COLORS.lightblue};
  border-radius: ${CHAMFER};
  align-self: center;
  overflow: hidden;
`;

export const ContentContainer = styled.View<{ mb?: number }>`
  flex: 1;
  margin-top: 30;
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : 90)};
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BottomContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50;
`;

export const ImageContainer = styled.View<{ h: number }>`
  /* margin-top: 30; */
  margin-left: -20;
  margin-bottom: 30;
  height: ${({ h }) => `${h}px`};
  width: 100%;
  align-items: center;
`;

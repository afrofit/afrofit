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

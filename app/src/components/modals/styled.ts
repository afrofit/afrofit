import styled from "styled-components/native";
import { COLORS } from "./../../../theme/globals";

interface Props {}

export const BackgroundOverlay = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  /* background-color: ${COLORS.dark}; */
  /* opacity: 0.9; */
  z-index: 120;
  padding: 20px;
`;

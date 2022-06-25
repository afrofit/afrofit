import { COLORS } from "../../../theme/globals";
import styled from "styled-components/native";

const BOX_SIZE = "90px";

export const LoaderBackground = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${COLORS.dark};
  opacity: 0.95;
  position: absolute;
  z-index: 100;
  justify-content: center;
  align-items: center;
`;

export const AnimationContainer = styled.View`
  height: ${BOX_SIZE};
  width: ${BOX_SIZE};
  justify-content: center;
  align-items: center;
`;

export const LoaderLocalContainer = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

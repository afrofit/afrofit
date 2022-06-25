import styled from "styled-components/native";

export const GenericErrorWrapper = styled.View`
  position: absolute;
  width: 90%;
  top: 7%;
  z-index: 10;
  align-self: center;
`;

export const EndIconContainer = styled.Pressable`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

export const StartIconContainer = styled.View`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

export const GenericErrorContentsWrapper = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

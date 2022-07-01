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
  margin-left: 10px;
`;

export const StartIconContainer = styled.View`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const GenericErrorContentsWrapper = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

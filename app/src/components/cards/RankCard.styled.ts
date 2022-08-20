import styled from "styled-components/native";

export const RankImageContainer = styled.View<{ size?: number }>`
  height: ${({ size }) => (size ? `${size * 1.9}px` : "95px")};
  width: ${({ size }) => (size ? `${size}px` : "50px")};
`;

export const RankContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RankImage = styled.Image`
  height: 100%;
  width: 100%;
`;

export const RankPositioner = styled.View`
  position: absolute;
  right: 95;
  top: 50;
`;

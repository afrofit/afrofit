import styled from "styled-components/native";

interface Props {
  size?: number;
}

export const ImageElement = styled.Image<Props>`
  width: 150;
  height: 100%;
`;

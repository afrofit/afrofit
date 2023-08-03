import { CHAMFER, COLORS } from "./../../../../../theme/globals";
import styled from "styled-components/native";

interface Props {
  height?: number;
}

export const StoryListWrapper = styled.ScrollView<Props>`
  border-radius: ${CHAMFER};
  // height: ${({ height }) => (height ? height : `65px`)}; 
`;

export const StoryIntroWrapper=styled.ScrollView`
overflow: hidden;
`;

export const CardContentWrapper = styled.View`
  justify-content: flex-start;
  align-items: flex-end;
  height: 130px;
  width: 100%;
  padding: 15px 20px;
`;

export const TagWrapper = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${COLORS.dark};
  padding: 5px 10px;
`;

export const CardImage = styled.Image`
  height: 130px;
  width: 140px;
`;

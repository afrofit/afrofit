import { CHAMFER, COLORS } from "../../../../../theme/globals";
import styled from "styled-components/native";

interface Props {
  padding: number;
}
export const StatsStack = styled.View<Props>`
  width: 100%;
  padding: ${({ padding }) => `${padding}px` ?? 0};
  padding-top: 15;
  padding-bottom: 15;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ValueContainer = styled.View`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10;
`;

export const KeyContainer = styled.View`
  flex: 1;
`;

export const DanceStatsContainer = styled.View`
  margin-bottom: 20;
`;

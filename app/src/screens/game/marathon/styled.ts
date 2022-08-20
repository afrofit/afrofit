import { CHAMFER, COLORS } from "../../../../../app/theme/globals";
import styled from "styled-components/native";

export const RanksListContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const RankingsListWrapper = styled.ScrollView`
  border-radius: ${CHAMFER};
  overflow: hidden;
  border-width: 1px;
  border-color: ${COLORS.hilite_purpink};
  max-height: 70%;
  /* z-index: 20; */
`;

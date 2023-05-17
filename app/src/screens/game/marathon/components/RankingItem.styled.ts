import { CHAMFER, COLORS } from "../../../../../theme/globals";
import styled from "styled-components/native";

interface Props {
  last?: boolean;
  first?: boolean;
}

export const RankingItemWrapper = styled.View<Props>`
  flex-direction: row;
  width: 100%;
  padding: 10px;
  padding-left: 20px;
  border-bottom-width: ${({ last }) => (last ? 0 : "1px")};
  border-bottom-color: ${COLORS.lightblue};
  border-top-left-radius: ${CHAMFER};
  border-top-right-radius: ${CHAMFER};

`;

export const ScoreWrapper = styled.View`
  width: 25%;
  align-items: flex-end;
  margin-left: 20px;
  margin-right: 10px;
`;

export const OrderNumberWrapper = styled.View`
  width: 45px;
  padding: 5px;
  margin-right: 10px;
`;

export const ContentWrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const UserNameWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ListWrapper = styled.ScrollView`
  border-radius: ${CHAMFER};
  overflow: hidden;
  border-width: 1px;
  border-color: ${COLORS.hilite_purpink};
  height: 45%;
  /* z-index: 20; */
`;

export const StatsListWrapper = styled.ScrollView`
  border-radius: ${CHAMFER};
  overflow: hidden;
  border-width: 1px;
  border-color: ${COLORS.hilite_purpink};
  /* z-index: 20; */
  margin-bottom: 20px;
`;

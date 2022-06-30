import { CHAMFER, COLORS } from "./../../../../../theme/globals";
import styled from "styled-components/native";

interface Props {
  last?: boolean;
  first?: boolean;
}
export const ItemWrapper = styled.View<Props>`
  /* margin-bottom: 20px; */
  flex-direction: row;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-width: ${({ last }) => (last ? 0 : "1px")};
  border-bottom-color: ${COLORS.hilite_purpink};
  border-top-left-radius: ${CHAMFER};
  border-top-right-radius: ${CHAMFER};
`;

export const NumWrapper = styled.View`
  width: 30%;
  align-items: flex-end;
  margin-right: 20px;
`;
export const LabelWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ListWrapper = styled.ScrollView`
  border-radius: ${CHAMFER};
  overflow: hidden;
  border-width: 1px;
  border-color: ${COLORS.hilite_purpink};
  background-color: red;
  /* z-index: 20; */
`;

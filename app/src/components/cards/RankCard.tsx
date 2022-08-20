import { RANKS_DATA } from "../../../../app/data/ranks-data";
import * as React from "react";
import Spacer from "../elements/Spacer";
import { Font } from "../font/Font";
import {
  RankContainer,
  RankImage,
  RankImageContainer,
} from "./RankCard.styled";

interface Props {
  rankId: number;
  size?: number;
  showName?: boolean;
}

export const RankCard: React.FC<Props> = ({
  rankId,
  size,
  showName = false,
}) => {
  return (
    <RankContainer>
      <RankImageContainer size={size}>
        <RankImage source={RANKS_DATA[rankId].url} />
      </RankImageContainer>
      <Spacer h={5} />
      {showName && <Font variant="sm2">General</Font>}
    </RankContainer>
  );
};

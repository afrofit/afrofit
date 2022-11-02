import * as React from "react";
import Spacer from "../elements/Spacer";
import { Font } from "../font/Font";
import {
  RankContainer,
  RankImage,
  RankImageContainer,
} from "./RankCard.styled";
import { RANKS_DATA } from "../../../../app/data/ranks-data";

interface Props {
  rankId: number;
  active?: boolean;
}

export const RankCard: React.FC<Props> = ({ rankId, active = false }) => {
  const size = active ? 40 : 30;

  return (
    <RankContainer>
      <RankImageContainer size={size}>
        <RankImage source={RANKS_DATA[rankId].url} />
      </RankImageContainer>
      <Spacer h={5} />
      {
        <Font
          variant={active ? "sm2" : "sm"}
          color={active ? "light" : "lightblue"}
        >
          {RANKS_DATA[rankId].name}
        </Font>
      }
    </RankContainer>
  );
};

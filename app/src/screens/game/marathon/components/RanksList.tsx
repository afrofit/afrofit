import { Card } from "../../../../../../app/src/components/cards/Card";
import { RankCard } from "../../../../../../app/src/components/cards/RankCard";
import { Section } from "../../../../../../app/src/components/section/Section";
import * as React from "react";
import { RanksListContainer } from "../styled";
import { RANKS_DATA } from "../../../../../../app/data/ranks-data";

interface Props {
  currentUserRank: number;
}

const ranks = [5, 4, 3, 2, 1].reverse();

export const RanksList: React.FC<Props> = ({ currentUserRank }) => {
  return (
    <Section mb={10} title="Available ranks">
      <Card>
        <RanksListContainer>
          {ranks.map((rank) => {
            return (
              <RankCard
                key={rank}
                rankId={rank}
                active={currentUserRank === rank}
              />
            );
          })}
        </RanksListContainer>
      </Card>
    </Section>
  );
};

/* 
   
*/

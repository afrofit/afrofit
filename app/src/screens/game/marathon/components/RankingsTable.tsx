import * as React from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../../../../../../app/store/reducers/auth/auth.slice";

import { Font } from "../../../../../../app/src/components/font/Font";
import { Section } from "../../../../../../app/src/components/section/Section";
import { RankingsListWrapper } from "../styled";
import { RankingItem } from "./RankingItem";
import { UserModel } from "../../../../../types/UserModel";

interface Props {
  rankings: { name: string; score: number; userId: string }[] | null;
  currentUserRank: number;
  currentUser?: UserModel | null | undefined;
}

export const RankingsTable: React.FC<Props> = ({
  rankings,
  currentUserRank,
  currentUser,
}) => {
  if (!currentUser) return null;

  if (!rankings || rankings.length < 1)
    return <Font>No marathon data available.</Font>;

  const filteredRankings = React.useMemo(() => {
    if (currentUserRank === 5) {
      return rankings.slice(120);
    }
    if (currentUserRank === 4) {
      return rankings.slice(70, 120);
    }
    if (currentUserRank === 3) {
      return rankings.slice(35, 70);
    }
    if (currentUserRank === 2) {
      return rankings.slice(10, 35);
    }
    if (currentUserRank === 1) {
      return rankings.slice(0, 10);
    }
    return rankings;
  }, [rankings, currentUserRank]);

  return (
    <Section title="Rankings">
      <RankingsListWrapper>
        {filteredRankings.map((user, index: number) => {
          return (
            <RankingItem
              key={user.userId}
              first={index === 0}
              last={index + 1 === rankings.length}
              username={user.name}
              order={index + 1}
              score={user.score}
              currentUser={currentUser.userId === user.userId}
            />
          );
        })}
      </RankingsListWrapper>
    </Section>
  );
};

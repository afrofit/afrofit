import * as React from "react";
import { Feather } from "@expo/vector-icons";

import { Card } from "../../../../components/cards/Card";
import { Font } from "../../../../components/font/Font";
import {
  RankingItemWrapper,
  ContentWrapper,
  UserNameWrapper,
  OrderNumberWrapper,
  ScoreWrapper,
} from "./RankingItem.styled";

interface ItemProps {
  first?: boolean;
  last?: boolean;
  username: string;
  order: number;
  score: number;
}

export const RankingItem: React.FC<ItemProps> = ({
  first,
  last,
  username,
  order,
  score,
}) => {
  const isNumeroUno = order === 1; // pos 1
  const isRunnerUp = order < 4 && order > 1; // pos 2, 3
  const isNextRunnerUp = order < 6 && order > 3; // pos 4, 5
  const isGoodPerformers = order < 9 && order > 5; // pos 6, 7, 8

  return (
    <Card
      marginBottom={0.1}
      disablePadding
      outlined={false}
      isSquare={true}
      first={first}
      last={last}
      bgColor={
        isNumeroUno
          ? "fuschia"
          : isRunnerUp
          ? "gold"
          : isNextRunnerUp
          ? "lightblue"
          : isGoodPerformers
          ? "hilite_purpink"
          : "lightblue"
      }
    >
      <RankingItemWrapper first={true} last={false}>
        <ContentWrapper>
          <OrderNumberWrapper>
            <Font variant="smc" color="lightblue">
              {order}
            </Font>
          </OrderNumberWrapper>
          <UserNameWrapper>
            <Font variant="p" color="lightblue">
              {username}
            </Font>
          </UserNameWrapper>
          <ScoreWrapper>
            <Font variant="sm2" color="lightblue">
              {score}
            </Font>
          </ScoreWrapper>
        </ContentWrapper>
      </RankingItemWrapper>
    </Card>
  );
};

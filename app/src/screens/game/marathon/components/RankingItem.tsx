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
  currentUser: boolean;
}

export const RankingItem: React.FC<ItemProps> = ({
  first,
  last,
  username,
  order,
  score,
  currentUser,
}) => {
  const isNumeroUno = order === 1; // pos 1
  const isRunnerUp = order < 4 && order > 1; // pos 2, 3
  const isNextRunnerUp = order < 6 && order > 3; // pos 4, 5
  const isGoodPerformers = order < 9 && order > 5; // pos 6, 7, 8

  return (
    <Card
      bdColor={currentUser ? "gold" : "lightblue"}
      marginBottom={0.1}
      disablePadding
      outlined={false}
      isSquare={true}
      first={first}
      last={last}
      bgColor={
        isNumeroUno
          ? "hilite_orange"
          : isRunnerUp
          ? "purple_100"
          : isNextRunnerUp
          ? "hilite_purpink"
          : isGoodPerformers
          ? "gray_100"
          : "gray_300"
      }
    >
      <RankingItemWrapper first={true} last={false}>
        <ContentWrapper>
          <OrderNumberWrapper>
            <Font variant="smc" color={currentUser ? "gold" : "light"}>
              {order}
            </Font>
          </OrderNumberWrapper>
          <UserNameWrapper>
            <Font variant="p" color={currentUser ? "gold" : "light"}>
              {username}
            </Font>
          </UserNameWrapper>
          <ScoreWrapper>
            <Font variant="sm2" color={currentUser ? "gold" : "light"}>
              {score}
            </Font>
          </ScoreWrapper>
        </ContentWrapper>
      </RankingItemWrapper>
    </Card>
  );
};

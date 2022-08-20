import * as React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import { Section } from "../../../../../app/src/components/section/Section";
import Spacer from "../../../../../app/src/components/elements/Spacer";
import { Card } from "../../../../../app/src/components/cards/Card";
import { RankCard } from "../../../../../app/src/components/cards/RankCard";
import { RankingsListWrapper, RanksListContainer } from "./styled";
import { RankingItem } from "./components/RankingItem";
import { selectUser } from "../../../../../app/store/reducers/auth/auth.slice";
import { FetchMarathonData } from "../../../../../app/store/reducers/story/thunks/fetch-marathon-data.thunk";

const userData = [
  { name: "GurgyWurgy", score: 10000 },
  { name: "ChinEye007", score: 9990 },
  { name: "RubeyRubey", score: 9980 },
  { name: "ScoobyDoo", score: 9970 },
  { name: "ScrappyDoo", score: 9960 },
  { name: "Paschalle", score: 9920 },
  { name: "Giannah_009", score: 9910 },
  { name: "Petreschu", score: 9900 },
  { name: "Pandlish", score: 9800 },
  { name: "Scarmonger_065", score: 8009 },
];

export const MarathonScreen = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);

  const fetchMarathonData = React.useCallback(() => {
    if (currentUser) {
      dispatch(FetchMarathonData(currentUser.userId));
    }
  }, [currentUser]);

  React.useEffect(() => {
    fetchMarathonData();
  }, []);

  return (
    <>
      <SolidBackground />
      <Screen>
        <Card padding={15}>
          <Font variant="p" align="center">
            The Marathon
          </Font>
        </Card>
        <Spacer />
        <Section mb={10} title="Available ranks">
          <Card>
            <RanksListContainer>
              <RankCard rankId={5} size={30} showName={false} />
              <RankCard rankId={4} size={30} showName={false} />
              <RankCard rankId={3} size={40} showName={true} />
              <RankCard rankId={2} size={30} showName={false} />
              <RankCard rankId={1} size={30} showName={false} />
            </RanksListContainer>
          </Card>
        </Section>
        <Section title="Rankings">
          <RankingsListWrapper>
            {userData.map((user, index: number) => {
              return (
                <RankingItem
                  key={user.name}
                  first={index === 0}
                  last={index + 1 === userData.length}
                  username={user.name}
                  order={index + 1}
                  score={user.score}
                />
              );
            })}
          </RankingsListWrapper>
        </Section>
      </Screen>
    </>
  );
};

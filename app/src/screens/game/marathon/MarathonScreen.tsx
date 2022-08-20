import * as React from "react";
import { useSelector } from "react-redux";

import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import { Section } from "../../../../../app/src/components/section/Section";
import Spacer from "../../../../../app/src/components/elements/Spacer";
import { Card } from "../../../../../app/src/components/cards/Card";
import { RankCard } from "../../../../../app/src/components/cards/RankCard";
import { RankingsListWrapper, RanksListContainer } from "./styled";
import { RankingItem } from "./components/RankingItem";
import { selectUserPerformance } from "../../../../../app/store/reducers/activity/activity.slice";

export const MarathonScreen = () => {
  const userPerformance = useSelector(selectUserPerformance);

  React.useEffect(() => {
    console.log("userPerformance", userPerformance);
  }, [userPerformance]);

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
            <RankingItem
              key={"chapter.id1"}
              // first={index === 0}
              first={true}
              // last={index + 1 === currentChapters.length}
              last={false}
              username="GurgyWurgy"
              order={1}
              score={10000}
            />
            <RankingItem
              key={"chapter.id2"}
              // first={index === 0}
              first={false}
              // last={index + 1 === currentChapters.length}
              last={false}
              username="ChineyeGigi"
              order={2}
              score={9999}
            />
            <RankingItem
              key={"chapter.id3"}
              // first={index === 0}
              first={false}
              // last={index + 1 === currentChapters.length}
              last={false}
              username="RubeyRubey"
              order={3}
              score={9998}
            />
            <RankingItem
              key={"chapter.id4"}
              // first={index === 0}
              first={false}
              // last={index + 1 === currentChapters.length}
              last={false}
              username="RubeyRubey"
              order={4}
              score={9998}
            />
            <RankingItem
              key={"chapter.id5"}
              // first={index === 0}
              first={false}
              // last={index + 1 === currentChapters.length}
              last={false}
              username="RubeyRubey"
              order={5}
              score={9998}
            />
            <RankingItem
              key={"chapter.id6"}
              // first={index === 0}
              first={false}
              // last={index + 1 === currentChapters.length}
              last={false}
              username="RubeyRubey"
              order={6}
              score={9998}
            />
            <RankingItem
              key={"chapter.id7"}
              // first={index === 0}
              first={false}
              // last={index + 1 === currentChapters.length}
              last={false}
              username="RubeyRubey"
              order={7}
              score={9998}
            />
            <RankingItem
              key={"chapter.id8"}
              // first={index === 0}
              first={false}
              // last={index + 1 === currentChapters.length}
              last={false}
              username="RubeyRubey"
              order={8}
              score={9998}
            />
            <RankingItem
              key={"chapter.id9"}
              // first={index === 0}
              first={false}
              // last={index + 1 === currentChapters.length}
              last={false}
              username="RubeyRubey"
              order={9}
              score={9998}
            />
            <RankingItem
              key={"chapter.id10"}
              // first={index === 0}
              first={false}
              // last={index + 1 === currentChapters.length}
              last={true}
              username="RubeyRubey"
              order={10}
              score={9998}
            />
          </RankingsListWrapper>
        </Section>
      </Screen>
    </>
  );
};

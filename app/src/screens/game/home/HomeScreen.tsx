import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import * as React from "react";
import { useCollection } from "../../../../src/hooks/useCollection";

import { Header } from "./components/Header";
import { Section } from "../../../../src/components/section/Section";
import { Font } from "../../../../src/components/font/Font";
import { ListHorizontal } from "../../../../src/components/lists/ListHorizontal";
import styled from "styled-components/native";
import { Card } from "../../../../src/components/cards/Card";
import { ActivityTodayList } from "./components/ActivityTodayList";
import Spacer from "../../../../src/components/elements/Spacer";
import { StoryList } from "./components/StoryList";

export const HomeScreen = () => {
  // const { documents: stories } = useCollection("stories");

  // React.useEffect(() => {
  //   console.log("Stories: ", stories);
  // }, [stories]);
  return (
    <>
      <SolidBackground />
      <Screen>
        <Header username="olasupoodebiyi" />
        <Spacer h={10} />
        <Section title="Your activity today">
          <ActivityTodayList />
        </Section>
        <Section title="Your stories">
          <StoryList />
        </Section>
      </Screen>
    </>
  );
};

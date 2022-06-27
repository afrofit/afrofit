import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import * as React from "react";
import { useCollection } from "../../../../src/hooks/useCollection";

import { Header } from "./components/Header";
import { Section } from "../../../../src/components/section/Section";
import { Font } from "../../../../src/components/font/Font";
import { ListHorizontal } from "../../../../src/components/lists/ListHorizontal";

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
        <Section title="Your activity today">
          <Font variant="smb" spacing={1}>
            <ListHorizontal />
          </Font>
        </Section>
        <Section title="Your stories">
          <Font variant="smb" spacing={1}>
            Content coming
          </Font>
        </Section>
      </Screen>
    </>
  );
};

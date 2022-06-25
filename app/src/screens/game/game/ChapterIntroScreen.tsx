import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import * as React from "react";

export const ChapterIntroScreen = () => {
  return (
    <>
      <SolidBackground />
      <Screen>
        <Font variant="h1">ChapterIntro Screen</Font>
      </Screen>
    </>
  );
};

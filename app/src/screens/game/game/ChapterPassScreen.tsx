import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import * as React from "react";

export const ChapterPassScreen = () => {
  return (
    <>
      <SolidBackground />
      <Screen>
        <Font variant="h1">ChapterPass Screen</Font>
      </Screen>
    </>
  );
};

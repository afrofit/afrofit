import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import * as React from "react";

export const HomeScreen = () => {
  return (
    <>
      <SolidBackground />
      <Screen>
        <Font variant="h1">Home Screen</Font>
      </Screen>
    </>
  );
};

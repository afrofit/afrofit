import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import * as React from "react";

export const ProfileScreen = () => {
  return (
    <>
      <SolidBackground />
      <Screen>
        <Font variant="h1">Profile Screen</Font>
      </Screen>
    </>
  );
};

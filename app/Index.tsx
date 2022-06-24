import * as React from "react";
import app from "./config/firebase";
import { LargeButton } from "./src/components/buttons/LargeButton";
// import { Card } from "./src/components/cards/Card";
import { Card } from "./src/components/cards/Card";
import { Font } from "./src/components/font/Font";
import { Screen } from "./src/components/screen/Screen";
import { SolidBackground } from "./src/components/screen/SolidBackground";

export const Index = () => {
  // console.log("Firebase", app);
  return (
    <>
      <SolidBackground />
      <Screen>
        <Font>Can we change these as we please? YASSS!</Font>
        <Font caps>Can we change these as we please? YASSS!</Font>
        <Card />
        <LargeButton onPress={() => console.log("Clicked")} />
      </Screen>
    </>
  );
};

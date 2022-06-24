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
        <Font variant="h1">Afia's Wedding</Font>
        <Font variant="h2" color="hilite_orange">
          Success!
        </Font>
        <Font variant="h3">Afia's Wedding</Font>
        <Font variant="h4">Afia's Wedding</Font>
        <Font variant="pb">Log me in</Font>
        <Font variant="p" color="lightblue">
          Calories burned
        </Font>
        <Font variant="smb" caps spacing={3}>
          Available Ranks
        </Font>
        <Font variant="sm1" color="hilite_pink">
          Sign, instead
        </Font>
        <Font variant="sm2">Email</Font>
        <Font variant="smc" spacing={2} caps>
          96% Complete
        </Font>
        <Font variant="num1" color="hilite_purpink">
          2.1k
        </Font>
        <Font variant="num2">60</Font>
        <Card />
        <LargeButton
          onPress={() => console.log("Tapped")}
          title="A Generic Button"
        />
      </Screen>
    </>
  );
};

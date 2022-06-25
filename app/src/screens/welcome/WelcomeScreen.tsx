import { Font } from "../../../src/components/font/Font";
import { Screen } from "../../../src/components/screen/Screen";
import { SolidBackground } from "../../../src/components/screen/SolidBackground";
import * as React from "react";
import { COLORS } from "../../../theme/globals";
import { LargeButton } from "../../../src/components/buttons/LargeButton";
import Spacer from "../../../src/components/elements/Spacer";
import { BorderedImage } from "../../../src/components/image/BorderedImage";

export const WelcomeScreen = () => {
  const handleStartGame = () => {
    return null;
  };

  return (
    <>
      <SolidBackground />
      <Screen>
        <BorderedImage />
        <Spacer h={40} />
        <Font variant="h1" color="lightblue" align="center">
          Fuel your fitness.
        </Font>
        <Font variant="h1" color="purple_100" align="center">
          Find your rhythm.
        </Font>
        <Spacer />
        <LargeButton onPress={handleStartGame} title="Log me in" />
        <Spacer />
        <Font variant="sm2" color="fuschia" align="center">
          Please note that this app is a value-added product for existing,
          active members of the Afrofit culture. In order to join, you need to
          visit our website for instructions.
        </Font>
      </Screen>
    </>
  );
};

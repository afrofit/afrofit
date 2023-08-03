import * as React from "react";
import { useNavigation } from "@react-navigation/native";

import Spacer from "../../../src/components/elements/Spacer";
import { BorderedImage } from "../../../src/components/image/BorderedImage";
import { Font } from "../../../src/components/font/Font";
import { LargeButton } from "../../../src/components/buttons/LargeButton";
import { Screen } from "../../../src/components/screen/Screen";
import { ScreenMarker } from "../../../src/components/screen/ScreenMarker";
import { SolidBackground } from "../../../src/components/screen/SolidBackground";
import { WelcomeScreenNavType } from "../../../src/navigator/types";
import { Linking, ScrollView, View } from "react-native";
import { RegisterDetailsView, RegisterLinkTouchableHighlight, WelcomeFirstView, WelcomeScreenWrapper, WelcomeSecondView } from "./styled";
import { windowHeight } from "../../../../app/utils/constant";

export const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavType>();

  const handleLogIntoGame = () => {
    console.log("About to log in");
    navigation.navigate("Login");
  };

  const onClick = () => {
    Linking.openURL("https://afrofitapp.com/register");
  };

  return (
    <>
      <SolidBackground />
      <WelcomeScreenWrapper showsVerticalScrollIndicator={false}>
        <Screen>
          <Spacer />
          <WelcomeFirstView>
            <BorderedImage size="md" />
            <Spacer h={50} />
            <Font variant="h2" color="lightblue" align="center">
              Find your rhythm.
            </Font>
            <Font variant="h2" color="purple_100" align="center">
              Fuel your fitness.
            </Font>
          </WelcomeFirstView>
          <WelcomeSecondView>
          <Spacer />
            <LargeButton onPress={handleLogIntoGame} title="Log me in" />
            <RegisterDetailsView>
              <Font variant="sm1" color="hilite_purpink" align="center">
                Don't have account?
              </Font>
              <RegisterLinkTouchableHighlight onPress={() => onClick()}>
                <Font
                  variant="sm1"
                  color="hilite_purpink"
                  align="center"
                  paddingleft={5}
                  underline={"underline"}
                >
                  Register
                </Font>
              </RegisterLinkTouchableHighlight>
            </RegisterDetailsView>
            <Font variant="sm2" color="fuschia" align="center">
              Please note that this app is a value-added product for existing,
              active members of the Afrofit culture. In order to join, you need
              to visit our website for instructions.
            </Font>
          </WelcomeSecondView>
        </Screen>
        </WelcomeScreenWrapper>
    </>
  );
};

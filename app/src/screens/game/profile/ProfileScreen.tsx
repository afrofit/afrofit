import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import * as React from "react";
import { LargeButton } from "../../../../src/components/buttons/LargeButton";
import { getAuth, signOut } from "firebase/auth";

export const ProfileScreen = () => {
  const auth = getAuth();

  const handleSignUserOut = async () => {
    console.log("Logging you out...");
    return signOut(auth);
  };

  return (
    <>
      <SolidBackground />
      <Screen>
        <Font variant="h1">Profile Screen</Font>
        <LargeButton title="Log me out" onPress={handleSignUserOut} />
      </Screen>
    </>
  );
};

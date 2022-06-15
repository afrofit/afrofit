import * as React from "react";
import { Text } from "react-native";
import app from "./config/firebase";
import { Font } from "./src/components/font/Font";
import { ImageBackground } from "./src/components/screen/ImageBackground";
import { Screen } from "./src/components/screen/Screen";
import { SolidBackground } from "./src/components/screen/SolidBackground";

export const Index = () => {
  console.log("Firebase", app);
  return (
    <>
      <ImageBackground />
      <Screen>
        <Font>Can we change these as we please? YASSS!</Font>
        <Font caps>Can we change these as we please? YASSS!</Font>
        <Text style={{ color: "black" }}>Android please show</Text>
      </Screen>
      {/* <SolidBackground color="orange" opacity={0.5} /> */}
    </>
  );
};

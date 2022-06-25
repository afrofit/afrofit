import * as React from "react";
// import * as AnimatedLottieView from "lottie-react-native";
import LottieView from "lottie-react-native";
// import AnimatedLottieView = require("lottie-react-native");
import { StyleSheet } from "react-native";

import { AnimationContainer, LoaderBackground } from "./styled";
import { Font } from "../font/Font";

interface Props {
  message?: string;
  visible?: boolean;
}

export const LoaderAbsolute: React.FC<Props> = ({
  message,
  visible = true,
}) => {
  if (!visible) return null;

  let animationRef: LottieView | null;

  React.useEffect(() => {
    animationRef && animationRef.play();
  }, []);

  return (
    <LoaderBackground>
      {message && (
        <Font variant="pb" color="lightblue">
          {message}
        </Font>
      )}
      <AnimationContainer>
        <LottieView
          ref={(animation: any) => (animationRef = animation)}
          autoPlay
          loop={true}
          source={require("../../../assets/animations/loading.json")}
          style={styles.animation}
        />
      </AnimationContainer>
    </LoaderBackground>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: 400,
    marginBottom: 10,
  },
});

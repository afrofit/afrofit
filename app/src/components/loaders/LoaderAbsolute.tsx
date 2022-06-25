import * as React from "react";
// import * as AnimatedLottieView from "lottie-react-native";
import LottieView from "lottie-react-native";
// import AnimatedLottieView = require("lottie-react-native");
import { StyleSheet } from "react-native";

import { AnimationContainer, LoaderBackground } from "./styled";

interface Props {
  message?: string;
  visible?: boolean;
}

export const LoaderAbsolute: React.FC<Props> = ({
  message = "Loading ...",
  visible = true,
}) => {
  if (!visible) return null;

  let animationRef: LottieView | null;

  React.useEffect(() => {
    animationRef && animationRef.play();
  }, []);

  return (
    <LoaderBackground>
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

import * as React from "react";
import { Easing, StyleSheet } from "react-native";
import { Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS, ColorType } from "../../../theme/globals";
import { ImageContainer, Inset, RoundBorder, StyledImage } from "./styled";
import { useFocusEffect } from "@react-navigation/native";

interface Props {
  color?: ColorType;
  align?: "left" | "right" | "center";
  size?: "lg" | "md" | "sm" | "xs";
}

export const BorderedImage: React.FC<Props> = ({
  color,
  align = "center",
  size = "lg",
}) => {
  const [fadeDuration, setFadeDuration] = React.useState<number>(2000);
  const [rotateDuration, setRotateDuration] = React.useState<number>(2100);

  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: fadeDuration,
        useNativeDriver: true,
      }).start();
      Animated.timing(imageRotation, {
        toValue: 1,
        duration: rotateDuration,
        useNativeDriver: true,
        easing: Easing.bounce,
      }).start();
    }, [fadeDuration, rotateDuration])
  );

  const imageOpacity = React.useRef(new Animated.Value(0)).current;
  const imageRotation = React.useRef(new Animated.Value(0)).current;

  return (
    <>
      <RoundBorder color={color} align={align} size={size}>
        <LinearGradient
          colors={[COLORS.purple_100, COLORS.hilite_pink, COLORS.hilite_orange]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Inset>
            <ImageContainer>
              <StyledImage
                source={require("../../../assets/images/art/sample_image.png")}
                style={{
                  opacity: imageOpacity,
                  transform: [
                    {
                      rotate: imageRotation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["-30deg", "0deg"],
                      }),
                    },
                  ],
                }}
              />
            </ImageContainer>
          </Inset>
        </LinearGradient>
      </RoundBorder>
    </>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
});

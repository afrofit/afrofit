import * as React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, ColorType } from "../../../theme/globals";

import { ImageContainer, Inset, RoundBorder, StyledImage } from "./styled";

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

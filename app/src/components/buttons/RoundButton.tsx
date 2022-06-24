import * as React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import { StyledGenericButton, StyledRoundButton } from "./styled";
import { Font } from "../font/Font";
import { COLORS } from "../../../theme/globals";
import { ButtonVariantsType } from "./types";

interface Props {
  onPress: () => void;
  variant?: ButtonVariantsType;
  icon?: "pause" | "play";
}

export const RoundButton: React.FC<Props> = ({
  onPress,
  variant = "gradient",
  icon = "play",
}) => {
  return (
    <StyledRoundButton onPress={onPress} variant={variant}>
      {variant === "gradient" ? (
        <LinearGradient
          colors={[COLORS.purple_100, COLORS.hilite_pink, COLORS.hilite_orange]}
          style={styles.button}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Feather name={icon} size={45} color={COLORS.light} />
        </LinearGradient>
      ) : (
        <StyledGenericButton variant={variant}>
          <Feather name={icon} size={45} color={COLORS.light} />
        </StyledGenericButton>
      )}
    </StyledRoundButton>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

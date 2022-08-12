import * as React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyledGenericButton, StyledSmallButton } from "./styled";
import { Font } from "../font/Font";
import { COLORS } from "../../../theme/globals";
import { ButtonVariantsType } from "./types";

interface Props {
  onPress: () => void;
  title: string;
  variant?: ButtonVariantsType;
}

export const SmallButton: React.FC<Props> = ({
  onPress,
  title,
  variant = "gradient",
}) => {
  return (
    <StyledSmallButton onPress={onPress} variant={variant}>
      {variant === "gradient" ? (
        <LinearGradient
          colors={[COLORS.purple_100, COLORS.hilite_pink, COLORS.hilite_orange]}
          style={styles.button}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Font variant="smb">{title}</Font>
        </LinearGradient>
      ) : (
        <StyledGenericButton variant={variant}>
          <Font variant="smb">{title}</Font>
        </StyledGenericButton>
      )}
    </StyledSmallButton>
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

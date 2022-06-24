import * as React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyledLargeButton } from "./styled";
import { Font } from "../font/Font";
import { COLORS } from "../../../theme/globals";

interface Props {
  onPress: () => void;
  title: string;
}

export const LargeButton: React.FC<Props> = ({ onPress, title }) => {
  return (
    <StyledLargeButton onPress={onPress}>
      <LinearGradient
        colors={[COLORS.purple_100, COLORS.hilite_pink, COLORS.hilite_orange]}
        style={styles.button}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Font variant="pb">{title}</Font>
      </LinearGradient>
    </StyledLargeButton>
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

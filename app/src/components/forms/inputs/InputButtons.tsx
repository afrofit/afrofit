import * as React from "react";
import { PressableIconWrapper } from "./styled";
import Feather from "@expo/vector-icons/Feather";
import { COLORS } from "../../../../theme/globals";

interface ShowPasswordButtonProps {
  onPress: () => void;
  currentIcon: "eye" | "eye-off";
}

interface ClearFieldButtonProps {
  onPress: () => void;
}

export const ClearFieldButton: React.FC<ClearFieldButtonProps> = ({
  onPress,
}) => {
  return (
    <PressableIconWrapper onPress={onPress}>
      <Feather name={"x"} size={20} color={COLORS["lightblue"]} />
    </PressableIconWrapper>
  );
};

export const ShowPasswordButton: React.FC<ShowPasswordButtonProps> = ({
  onPress,
  currentIcon,
}) => {
  return (
    <PressableIconWrapper onPress={onPress}>
      <Feather name={currentIcon} size={20} color={COLORS["lightblue"]} />
    </PressableIconWrapper>
  );
};

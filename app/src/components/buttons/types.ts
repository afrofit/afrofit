import { COLORS } from "../../../theme/globals";

export const BUTTON_VARIANTS = {
  gradient: { bg: COLORS.dark },
  gray: { bg: COLORS.gray_100 },
  outlined: { bg: COLORS.gray_300 },
};

export type ButtonVariantsType = keyof typeof BUTTON_VARIANTS;

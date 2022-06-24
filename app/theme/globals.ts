import { Dimensions } from "react-native";

export const COLORS = {
  dark: "#141723",
  gray_100: "#3b3e52",
  gray_200: "#2e2f3d",
  gray_300: "#1d1f2e",
  hilite_orange: "#f26c68",
  hilite_pink: "#d84770",
  hilite_purpink: "#a6437d",
  light: "#fffffe",
  lightblue: "#8585ab",
  purple_100: "#65459b",
  purple_300: "#241042",
};

export const FONT_WEIGHTS = {
  bold: 500,
  heavy: 900,
  regular: 400,
};
const { bold, heavy, regular } = FONT_WEIGHTS;

export const FONT_VARIANTS = {
  h1: { size: "50px", weight: heavy },
  h2: { size: "50px", weight: heavy },
  h3: { size: "50px", weight: heavy },
  h4: { size: "50px", weight: heavy },
  p: { size: "20px", weight: regular },
  pb: { size: "50px", weight: bold },
  smb: { size: "50px", weight: heavy },
  sm1: { size: "50px", weight: heavy },
  sm2: { size: "50px", weight: heavy },
  smc: { size: "50px", weight: heavy },
  num1: { size: "50px", weight: heavy },
  num2: { size: "50px", weight: heavy },
};

export type ColorType = keyof typeof COLORS;
export type FontVariantsType = keyof typeof FONT_VARIANTS;

export const DEVICE_WIDTH = `${Dimensions.get("window").width}px`;
export const DEVICE_HEIGHT = `${Dimensions.get("window").height}px`;
export const MARGIN_BIG = "20px";
export const MARGIN = "10px";
export const TOUCH_OPACITY = 0.8;
export const CHAMFER = "15px";
export const CHAMFER_BIG = "50px";

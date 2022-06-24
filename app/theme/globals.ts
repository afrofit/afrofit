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
  bolder: 700,
  heavy: 900,
  regular: 400,
};
const { bold, heavy, regular, bolder } = FONT_WEIGHTS;

export const FONT_VARIANTS = {
  h1: { size: "45px", weight: bold },
  h2: { size: "35px", weight: regular },
  h3: { size: "28px", weight: regular },
  h4: { size: "25px", weight: bold },
  p: { size: "20px", weight: regular },
  pb: { size: "20px", weight: bolder },
  smb: { size: "17px", weight: bolder },
  sm1: { size: "20px", weight: regular },
  sm2: { size: "15px", weight: bolder },
  smc: { size: "15px", weight: heavy },
  num1: { size: "40px", weight: bold },
  num2: { size: "35px", weight: bold },
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

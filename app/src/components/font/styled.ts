import {
  COLORS,
  FONT_VARIANTS,
  FontVariantsType,
} from "../../../theme/globals";
import styled from "styled-components/native";
import { ColorType } from "../../../theme/globals";

interface StyledFontProps {
  variant?: FontVariantsType;
  caps?: boolean;
  color?: ColorType;
  align?: "left" | "right" | "center";
  weight?: "bold" | "regular" | "heavy";
  spacing?: number;
  underline?:any
}
export const StyledFont = styled.Text<StyledFontProps>`
  font-size: ${({ variant }) =>
    variant ? FONT_VARIANTS[variant].size : FONT_VARIANTS["p"].size};
  font-weight: ${({ variant }) =>
    variant ? FONT_VARIANTS[variant].weight : FONT_VARIANTS["p"].weight};
  color: ${({ color }) => (color ? COLORS[color] : COLORS["light"])};
  text-transform: ${({ caps }) => (caps ? "uppercase" : "none")};
  text-align: ${({ align }) => (align ? align : "left")};
  letter-spacing: ${({ spacing }) => (spacing ? `${spacing}px` : 0)};
  padding: 0;
  margin: 0;
  textDecorationLine:${({ underline }) =>
  underline ? "underline" : null};
`;

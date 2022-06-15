import { COLORS } from "./../../../theme/color";
import { FontType } from "./types";
import styled from "styled-components/native";
import { ColorType } from "../../../theme/color";

interface StyledFontProps {
  variant?: FontType;
  caps?: boolean;
  color?: ColorType;
}
export const StyledFont = styled.Text<StyledFontProps>`
  font-size: 25px;
  font-weight: 500;
  color: ${({ color }) => (color ? COLORS[color] : COLORS["white"])};
  text-transform: ${({ caps }) => (caps ? "uppercase" : "none")};
`;

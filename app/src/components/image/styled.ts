import { COLORS, ColorType } from "./../../../theme/globals";
import styled from "styled-components/native";

interface Props {
  color?: ColorType;
  align?: "left" | "right" | "center";
  size?: "lg" | "md" | "sm" | "xs";
}

export const RoundBorder = styled.View<Props>`
  height: ${({ size }) =>
    size === "lg"
      ? "300px"
      : size === "md"
      ? "230px"
      : size === "sm"
      ? "130px"
      : "40px"};
  width: ${({ size }) =>
    size === "lg"
      ? "300px"
      : size === "md"
      ? "230px"
      : size === "sm"
      ? "130px"
      : "40px"};
  border-radius: 200px;
  overflow: hidden;
  background-color: ${({ color }) =>
    color ? COLORS[color] : COLORS["lightblue"]};
  align-self: ${({ align }) =>
    align === "center"
      ? "center"
      : align === "right"
      ? "flex-end"
      : "flex-start"};
  position: relative;
`;

export const Inset = styled.View<Props>`
  border-radius: 200px;
  overflow: hidden;
  width: 95%;
  height: 95%;
  background-color: ${({ color }) => (color ? COLORS[color] : COLORS["dark"])};
  position: absolute;
  top: 2.5%;
  left: 2.5%;
`;

export const ImageContainer = styled.View<Props>`
  border-radius: 200px;
  overflow: hidden;
  width: 95%;
  height: 95%;
  background-color: ${({ color }) =>
    color ? COLORS[color] : COLORS["fuschia"]};
  position: absolute;
  top: 2.5%;
  left: 2.5%;
`;

export const StyledImage = styled.Image`
  height: 100%;
  width: 100%;
`;

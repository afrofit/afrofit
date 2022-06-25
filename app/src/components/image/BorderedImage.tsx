import { ColorType } from "../../../theme/globals";
import * as React from "react";

import { ImageContainer, Inset, RoundBorder, StyledImage } from "./styled";

interface Props {
  color?: ColorType;
  align?: "left" | "right" | "center";
  size?: "lg" | "md" | "sm" | "xs";
}

export const BorderedImage: React.FC<Props> = ({
  color,
  align = "center",
  size = "lg",
}) => {
  return (
    <RoundBorder color={color} align={align} size={size}>
      <Inset>
        <ImageContainer>
          <StyledImage
            source={require("../../../assets/images/art/sample_image.png")}
          />
        </ImageContainer>
      </Inset>
    </RoundBorder>
  );
};

import * as React from "react";
import { StyledImageBackground } from "./styled";
interface Props {}

export const ImageBackground: React.FC<Props> = () => {
  const image = require("../../../assets/images/background/bg_blurred_001.png");

  return <StyledImageBackground source={image} />;
};

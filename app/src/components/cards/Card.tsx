import * as React from "react";

import { ColorType } from "../../../theme/globals";

import { CardWrapper } from "./styled";

interface Props {
  children: any;
  disablePadding?: boolean;
  bgColor?: ColorType;
  bdColor?: ColorType;
  outlined?: boolean;
  padding?: number;
  centeredContent?: boolean;
  flexDirection?: "row" | "column";
  marginBottom?: number;
  isSquare: boolean;
}

export const Card: React.FC<Props> = ({
  children,
  disablePadding,
  bgColor,
  bdColor,
  outlined = true,
  padding,
  centeredContent = false,
  flexDirection = "column",
  marginBottom = 0,
  isSquare = false,
}) => {
  return (
    <CardWrapper
      padding={padding}
      bgColor={bgColor}
      bdColor={bdColor}
      outlined={outlined}
      disablePadding={disablePadding}
      centeredContent={centeredContent}
      flexDirection={flexDirection}
      marginBottom={marginBottom}
      isSquare={isSquare}
    >
      {children}
    </CardWrapper>
  );
};

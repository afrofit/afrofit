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
}

export const Card: React.FC<Props> = ({
  children,
  disablePadding,
  bgColor,
  bdColor,
  outlined = true,
  padding,
}) => {
  return (
    <CardWrapper
      padding={padding}
      bgColor={bgColor}
      bdColor={bdColor}
      outlined={outlined}
      disablePadding={disablePadding}
    >
      {children}
    </CardWrapper>
  );
};

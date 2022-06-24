import { ColorType } from "afrofitapp/theme/globals";
import * as React from "react";
import { CardWrapper } from "./styled";

interface Props {
  children: any;
  disablePadding?: boolean;
  bgColor?: ColorType;
  outlined?: boolean;
}

export const Card: React.FC<Props> = ({
  children,
  disablePadding,
  bgColor,
  outlined = true,
}) => {
  return (
    <CardWrapper
      bgColor={bgColor}
      outlined={outlined}
      disablePadding={disablePadding}
    >
      {children}
    </CardWrapper>
  );
};

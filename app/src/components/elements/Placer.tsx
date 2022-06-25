import * as React from "react";
import { PlacerWrapper } from "./styled";

interface Props {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  children: any;
}

export const Placer: React.FC<Props> = ({
  top,
  bottom,
  right,
  left,
  children,
}) => {
  return (
    <PlacerWrapper top={top} bottom={bottom} right={right} left={left}>
      {children}
    </PlacerWrapper>
  );
};

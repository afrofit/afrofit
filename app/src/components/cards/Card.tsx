import * as React from "react";
import { CardWrapper } from "./styled";

interface Props {
  children: any;
  disablePadding?: boolean;
}

export const Card: React.FC<Props> = ({ children, disablePadding }) => {
  return <CardWrapper disablePadding={disablePadding}>{children}</CardWrapper>;
};

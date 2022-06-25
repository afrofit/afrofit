import * as React from "react";
import { MarkerComponent } from "./styled";

interface Props {
  percentage?: number;
  children: any;
}

export const ScreenMarker: React.FC<Props> = ({
  percentage = 50,
  children,
}) => {
  return <MarkerComponent percentage={percentage}>{children}</MarkerComponent>;
};

import * as React from "react";
import { StyledSafeArea, StyledScreen } from "./styled";

interface Props {
  children: any;
}

export const Screen: React.FC<Props> = ({ children }) => {
  return (
    <StyledSafeArea>
      <StyledScreen>{children}</StyledScreen>
    </StyledSafeArea>
  );
};

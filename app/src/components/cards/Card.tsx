import * as React from "react";

import { ColorType } from "../../../theme/globals";

import { CardWrapper, Tappable } from "./styled";

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
  isSquare?: boolean;
  onPress?: () => void;
  first?: boolean;
  last?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
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
  first,
  last,
  onPress,
  fullWidth,
  disabled = false,
}) => {
  return (
    <Tappable disabled={disabled} onPress={onPress}>
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
        first={first}
        last={last}
        opacity={disabled ? 0.45 : 1}
      >
        {children}
      </CardWrapper>
    </Tappable>
  );
};

import * as React from "react";

import { ColorType } from "../../../theme/globals";
import { Ionicons } from "@expo/vector-icons";
import { Font } from "../font/Font";
import { RadioboxPressable } from "./styled";


interface Props {
    bgColor?: ColorType;
    onPress? :()=>void;
    iconName? : any;
    title?: string;
    color?: any;
}

export const RadioBox: React.FC<Props> = ({
    bgColor,
    onPress,
    iconName,
    title,
    color
}) => {
  return (
    <RadioboxPressable onPress={onPress}>
      <Ionicons name={iconName} size={24} color={color} />
        <Font variant="sm2"  paddingleft={7}>
        {title}
        </Font>
    </RadioboxPressable>
  );
};

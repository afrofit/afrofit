import * as React from "react";

import { ColorType } from "../../../theme/globals";
import { CheckboxPressable } from "./styled";
import { FontAwesome } from "@expo/vector-icons";
import { Font } from "../font/Font";


interface Props {
    bgColor?: ColorType;
    onPress? :()=>void;
    iconName? : any;
    title?: string;
}

export const CheckBox: React.FC<Props> = ({
    bgColor,
    onPress,
    iconName,
    title
}) => {
  return (
    <CheckboxPressable onPress={onPress}>
      <FontAwesome name={iconName} size={24} color="white" />
        <Font variant="sm2"  paddingleft={7}>
        {title}
        </Font>
    </CheckboxPressable>
  );
};

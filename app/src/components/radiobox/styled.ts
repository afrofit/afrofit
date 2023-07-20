import { COLORS, ColorType } from "../../../../app/theme/globals";
import styled from "styled-components/native";

interface Props{
    bgColor?: ColorType;
}

export const RadioboxPressable=styled.Pressable<Props>`
    flex-direction:row;
    alignItems:center
    `
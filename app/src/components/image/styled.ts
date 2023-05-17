import styled from "styled-components/native";
import { Animated, Dimensions } from "react-native";
import { COLORS, ColorType } from "./../../../theme/globals";
import { windowWidth } from "../../../../app/utils/constant";


interface Props {
  color?: ColorType;
  align?: "left" | "right" | "center";
  size?: "lg" | "md" | "sm" | "xs";
}

export const RoundBorder = styled.View<Props>`
  height: ${({ size }) =>
    size === "lg"
      ? "300px"
      : size === "md"
      ? "230px"
      : size === "sm"
      ? "130px"
      : "40px"};
  width: ${({ size }) =>
    size === "lg"
      ? "300px"
      : size === "md"
      ? "230px"
      : size === "sm"
      ? "130px"
      : "40px"};
  border-radius: 200px;
  overflow: hidden;
  background-color: ${({ color }) =>
    color ? COLORS[color] : COLORS["lightblue"]};
  align-self: ${({ align }) =>
    align === "center"
      ? "center"
      : align === "right"
      ? "flex-end"
      : "flex-start"};
  position: relative;
`;

export const Inset = styled.View<Props>`
  border-radius: 200px;
  overflow: hidden;
  width: 95%;
  height: 95%;
  background-color: ${({ color }) => (color ? COLORS[color] : COLORS["dark"])};
  position: absolute;
  top: 2.5%;
  left: 2.5%;
`;

export const ImageContainer = styled.View<Props>`
  border-radius: 200px;
  overflow: hidden;
  width: 95%;
  height: 95%;
  background-color: ${({ color }) => (color ? COLORS[color] : COLORS["dark"])};
  position: absolute;
  top: 2.5%;
  left: 2.5%;
`;

export const StyledImage = styled(Animated.Image)`
  height: 100%;
  width: 100%;
`;


export const AVATAR_IMG=styled.Image`
height: 115;
width:${windowWidth/3.4};
`;

export const AvatarCard=styled.View`
width: 100%;
background-color:${ COLORS.gray_300}
height:55%;
border-top-left-radius:20;
border-top-right-radius:20;
border-bottom-right-radius:20;
border-bottom-left-radius:20;
overflow: hidden;
position: relative;
margin-bottom:20
border-width:1;
border-color:${COLORS.lightblue};
`
export const AvatarImageOpacity=styled.TouchableOpacity` 
`
export const AvatarDataFlatlist=styled.FlatList`
`

export const UPLOAD_IMG=styled.Image`
height: 50;
width: 50;
`;

export const UploadImageView=styled.Pressable` 
flex-direction: row;
alignSelf:center;
alignItems:center
`


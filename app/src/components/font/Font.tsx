import { ColorType, FontVariantsType } from "../../../theme/globals";
import { StyledFont } from "./styled";

interface Props {
  children: any;
  variant?: FontVariantsType;
  caps?: boolean;
  color?: ColorType;
  spacing?: number;
  align?: "left" | "right" | "center";
  numberOfLines?:number;
  underline?:any
  onPress?:any;
  paddingleft?:number

}

export const Font: React.FC<Props> = ({
  children,
  variant = "p",
  caps,
  color,
  spacing,
  align,
  numberOfLines,
  underline=null,
  onPress=null,
  paddingleft,
}) => {
  return (
    <StyledFont
      allowFontScaling={false}
      variant={variant}
      caps={caps}
      color={color}
      spacing={spacing}
      align={align}
      numberOfLines={numberOfLines}
      underline={underline}
      onPress={onPress}
    paddingleft={paddingleft}
>
      {children}
    </StyledFont>
  );
};

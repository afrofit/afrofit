import { ColorType, FontVariantsType } from "../../../theme/globals";
import { StyledFont } from "./styled";

interface Props {
  children: any;
  variant?: FontVariantsType;
  caps?: boolean;
  color?: ColorType;
  spacing?: number;
  align?: "left" | "right" | "center";
  numberOfLines?:number

}

export const Font: React.FC<Props> = ({
  children,
  variant = "p",
  caps,
  color,
  spacing,
  align,
  numberOfLines
}) => {
  return (
    <StyledFont
      variant={variant}
      caps={caps}
      color={color}
      spacing={spacing}
      align={align}
      numberOfLines={numberOfLines}
>
      {children}
    </StyledFont>
  );
};

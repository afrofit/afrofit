import { ColorType, FontVariantsType } from "../../../theme/globals";
import { StyledFont } from "./styled";

interface Props {
  children: any;
  variant?: FontVariantsType;
  caps?: boolean;
  color?: ColorType;
  spacing?: number;
  align?: "left" | "right" | "center";
}

export const Font: React.FC<Props> = ({
  children,
  variant = "p",
  caps,
  color,
  spacing,
  align,
}) => {
  return (
    <StyledFont
      variant={variant}
      caps={caps}
      color={color}
      spacing={spacing}
      align={align}
    >
      {children}
    </StyledFont>
  );
};

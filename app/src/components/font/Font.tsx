import { ColorType, FontVariantsType } from "afrofitapp/theme/globals";
import { StyledFont } from "./styled";

interface Props {
  children: any;
  variant?: FontVariantsType;
  caps?: boolean;
  color?: ColorType;
  spacing?: number;
}

export const Font: React.FC<Props> = ({
  children,
  variant = "p",
  caps,
  color,
  spacing,
}) => {
  return (
    <StyledFont variant={variant} caps={caps} color={color} spacing={spacing}>
      {children}
    </StyledFont>
  );
};

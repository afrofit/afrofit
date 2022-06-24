import { FontVariantsType } from "afrofitapp/theme/globals";
import { StyledFont } from "./styled";

interface Props {
  children: any;
  variant?: FontVariantsType;
  caps?: boolean;
}

export const Font: React.FC<Props> = ({
  children,
  variant = "p",
  caps = false,
}) => {
  return (
    <StyledFont variant={variant} caps={caps}>
      {children}
    </StyledFont>
  );
};

import { StyledFont } from "./styled";
import { FontType } from "./types";

interface Props {
  children: any;
  variant?: FontType;
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

import { CHAMFER, FONT_VARIANTS } from "../../../../theme/globals";
import { COLORS } from "../../../../theme/globals";
import styled from "styled-components/native";

interface Props {
  error?: any;
  focused?: boolean;
}

export const FieldWrapper = styled.View`
  width: 100%;
`;

export const InputWrapper = styled.View<Props>`
  height: 65px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-width: ${({ focused }) => (focused ? "2px" : "1px")};
  margin-bottom: 15px;
  border-color: ${({ focused, error }) =>
    focused && !error
      ? COLORS.purple_100
      : focused || error
      ? COLORS.hilite_orange
      : COLORS.lightblue};
  background-color: ${COLORS.dark};
  border-radius: ${CHAMFER};
  margin-top: 4px;
`;

export const InputField = styled.TextInput`
  color: ${"white"};
  font-weight: 400;
  font-size: 16px;
  height: 100%;
  /* width: 100%; */
  flex: 1;
  padding: 10px;
  letter-spacing: 0.2px;
`;

export const IconWrapper = styled.View`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const PressableIconWrapper = styled.Pressable`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

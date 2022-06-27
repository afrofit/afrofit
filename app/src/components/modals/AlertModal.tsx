import * as React from "react";
import { Card } from "../cards/Card";
import { BackgroundOverlay } from "./styled";
import Spacer from "../elements/Spacer";
import { Font } from "../font/Font";
import { SmallButton } from "../buttons/SmallButton";

interface Props {
  onDismiss: () => void;
  visible: boolean;
}
export const AlertModal: React.FC<Props> = ({ onDismiss, visible }) => {
  if (!visible) return null;
  return (
    <BackgroundOverlay>
      <Card centeredContent>
        <Font variant="h4" color="hilite_pink">
          Title
        </Font>
        <Spacer />
        <Font align="center">
          This represents the body of this modal and it can contain an awful
          amount of text and handle it just fine!
        </Font>
        <Spacer h={30} />
        <SmallButton title="OK" onPress={onDismiss} />
      </Card>
    </BackgroundOverlay>
  );
};

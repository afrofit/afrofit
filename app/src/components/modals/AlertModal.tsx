import * as React from "react";
import { Card } from "../cards/Card";
import { BackgroundOverlay } from "./styled";
import Spacer from "../elements/Spacer";
import { Font } from "../font/Font";
import { SmallButton } from "../buttons/SmallButton";

interface Props {
  onDismiss: () => void;
  visible: boolean;
  body: string;
  title: string;
  dismissText?: string;
}
export const AlertModal: React.FC<Props> = ({
  onDismiss,
  visible,
  body,
  title,
  dismissText = "OK",
}) => {
  if (!visible) return null;
  return (
    <BackgroundOverlay>
      <Card centeredContent>
        <Font variant="h4" color="hilite_pink">
          {title}
        </Font>
        <Spacer />
        <Font align="center">{body}</Font>
        <Spacer h={30} />
        <SmallButton title={dismissText} onPress={onDismiss} />
      </Card>
    </BackgroundOverlay>
  );
};

import * as React from "react";
import { Card } from "../cards/Card";
import { BackgroundOverlay } from "./styled";
import Spacer from "../elements/Spacer";
import { Font } from "../font/Font";
import { SmallButton } from "../buttons/SmallButton";

interface Props {
  onDismiss: () => void;
  onQuitDance: () => void;
  visible: boolean;
}
export const GamePausedModal: React.FC<Props> = ({
  onDismiss,
  onQuitDance,
  visible,
}) => {
  if (!visible) return null;
  return (
    <BackgroundOverlay>
      <Card centeredContent>
        <Font variant="h4" color="hilite_pink">
          Game Paused!
        </Font>
        <Spacer h={30} />
        <SmallButton title="Continue" onPress={onDismiss} />
        <Spacer />
        <SmallButton variant="outlined" title="Quit" onPress={onQuitDance} />
      </Card>
    </BackgroundOverlay>
  );
};

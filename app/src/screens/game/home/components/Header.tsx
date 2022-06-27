import { Card } from "../../../../../src/components/cards/Card";
import * as React from "react";
import { ImagePositioner, TextPositioner } from "../styled";
import { BorderedImage } from "../../../../../src/components/image/BorderedImage";
import { Font } from "../../../../../src/components/font/Font";

interface Props {
  username: string;
}

export const Header: React.FC<Props> = ({ username }) => {
  return (
    <Card centeredContent={true} flexDirection="row" marginBottom={20}>
      <ImagePositioner>
        <BorderedImage size="xs" />
      </ImagePositioner>
      <TextPositioner>
        <Font variant="sm2" color="lightblue">
          Welcome back
        </Font>
        <Font variant="pb">{username}</Font>
      </TextPositioner>
    </Card>
  );
};

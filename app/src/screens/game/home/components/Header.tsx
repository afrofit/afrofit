import { Card } from "../../../../../src/components/cards/Card";
import * as React from "react";
import { ImagePositioner, TextPositioner } from "../styled";
import { BorderedImage } from "../../../../../src/components/image/BorderedImage";
import { Font } from "../../../../../src/components/font/Font";
import { Avatar } from "../../../../../src/components/image/Avatar";

interface Props {
  username: string;
  dpId: number;
}

export const Header: React.FC<Props> = ({ username, dpId }) => {
  const imageUrl = `../../../../../assets/images/dp/${dpId}.png`;
  return (
    <Card centeredContent={true} flexDirection="row" marginBottom={20}>
      <ImagePositioner>
        <Avatar size="xs" imageId={dpId} />
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

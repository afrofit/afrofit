import { Card } from "../../../../../src/components/cards/Card";
import * as React from "react";
import { ImagePositioner, TextPositioner } from "../styled";
import { BorderedImage } from "../../../../../src/components/image/BorderedImage";
import { Font } from "../../../../../src/components/font/Font";
import { storage } from "../../../../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";

interface Props {
  username: string;
  imageUrl?: string;
}

export const Header: React.FC<Props> = ({ username, imageUrl }) => {
  return (
    <Card centeredContent={true} flexDirection="row" marginBottom={20}>
      <ImagePositioner>
        <BorderedImage size="xs" imageUrl={imageUrl} />
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

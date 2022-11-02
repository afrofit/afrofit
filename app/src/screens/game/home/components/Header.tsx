import { Card } from "../../../../../src/components/cards/Card";
import * as React from "react";
import { ImagePositioner, TextPositioner } from "../styled";
import { BorderedImage } from "../../../../../src/components/image/BorderedImage";
import { Font } from "../../../../../src/components/font/Font";
import { Avatar } from "../../../../../src/components/image/Avatar";
import { RANKS_DATA } from "../../../../../../app/data/ranks-data";
import Spacer from "../../../../../../app/src/components/elements/Spacer";

interface Props {
  username: string;
  dpId: number;
  currentUserRank?: number;
}

export const Header: React.FC<Props> = ({
  username,
  dpId,
  currentUserRank,
}) => {
  const imageUrl = `../../../../../assets/images/dp/${dpId}.png`;
  return (
    <Card centeredContent={true} flexDirection="row" marginBottom={20}>
      <ImagePositioner>
        <Avatar size="xs" imageId={dpId} />
      </ImagePositioner>
      <TextPositioner>
        <Font variant="sm2" color="lightblue">
          Welcome back, {currentUserRank && RANKS_DATA[currentUserRank].name}!
        </Font>
        <Spacer h={7} />
        <Font variant="pb">{username}</Font>
        <Spacer h={5} />
      </TextPositioner>
    </Card>
  );
};

//

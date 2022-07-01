import * as React from "react";
import {
  calculateCaloriesFromBodyMovements,
  calculateDanceTimeFromBodyMovements,
} from "../../../utils/formatters";
import Spacer from "../elements/Spacer";
import { Font } from "../font/Font";
import { VertiCardChild, VertiCardWrapper } from "./styled";

interface Props {
  bodyMoves: number;
}
export const VertiCard: React.FC<Props> = ({ bodyMoves }) => {
  return (
    <VertiCardWrapper>
      <VertiCardChild first>
        <Font variant="sm2" color="lightblue" align="center">
          Burn Calories
        </Font>
        <Spacer h={5} />
        <Font variant="num2" color="hilite_orange" align="center">
          {calculateCaloriesFromBodyMovements(bodyMoves)}
        </Font>
      </VertiCardChild>
      <VertiCardChild middle>
        <Font variant="sm2" color="lightblue" align="center">
          Body Moves
        </Font>
        <Spacer h={5} />
        <Font variant="num2" color="hilite_orange" align="center">
          {bodyMoves}
        </Font>
      </VertiCardChild>
      <VertiCardChild last>
        <Font variant="sm2" color="lightblue" align="center">
          Dance Time
        </Font>
        <Spacer h={5} />
        <Font variant="num2" color="hilite_orange" align="center">
          {calculateDanceTimeFromBodyMovements(bodyMoves)}
        </Font>
      </VertiCardChild>
    </VertiCardWrapper>
  );
};

import * as React from "react";
import {
  calculateCaloriesFromBodyMovements,
  calculateDanceTimeFromBodyMovements,
  formattedStat,
} from "../../../utils/formatters";
import Spacer from "../elements/Spacer";
import { Font } from "../font/Font";
import { VertiCardChild, VertiCardWrapper } from "./styled";

interface Props {
  bodyMoves: any;
  burnCalories: any;
  time:any
}
export const VertiCardStory: React.FC<Props> = ({burnCalories,bodyMoves,time }) => {
  return (
    <VertiCardWrapper>
      <VertiCardChild first>
        <Font variant="sm2" color="lightblue" align="center">
          Burn Calories
        </Font>
        <Spacer h={5} />
        <Font variant="num3" color="hilite_orange" align="center">
        {burnCalories}
        </Font>
      </VertiCardChild>
      <VertiCardChild middle>
        <Font variant="sm2" color="lightblue" align="center">
          Body Moves
        </Font>
        <Spacer h={5} />
        <Font variant="num3" color="hilite_orange" align="center">
          {bodyMoves}
        </Font>
      </VertiCardChild>
      <VertiCardChild last>
        <Font variant="sm2" color="lightblue" align="center">
          Time (Mins)
        </Font>
        <Spacer h={5} />
        <Font variant="num3" color="hilite_orange" align="center">
          {time}
        </Font>
      </VertiCardChild>
    </VertiCardWrapper>
  );
};
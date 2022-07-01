import * as React from "react";
import Spacer from "../elements/Spacer";
import { Font } from "../font/Font";
import { VertiCardChild, VertiCardWrapper } from "./styled";

interface Props {
  value1: number;
  value2: number;
  value3: number;
}
export const VertiCard: React.FC<Props> = ({ value1, value2, value3 }) => {
  return (
    <VertiCardWrapper>
      <VertiCardChild first>
        <Font variant="sm2" color="lightblue" align="center">
          Burn Calories
        </Font>
        <Spacer h={5} />
        <Font variant="num2" color="hilite_orange" align="center">
          25k
        </Font>
      </VertiCardChild>
      <VertiCardChild middle>
        <Font variant="sm2" color="lightblue" align="center">
          Body Moves
        </Font>
        <Spacer h={5} />
        <Font variant="num2" color="hilite_orange" align="center">
          13
        </Font>
      </VertiCardChild>
      <VertiCardChild last>
        <Font variant="sm2" color="lightblue" align="center">
          Dance Time
        </Font>
        <Spacer h={5} />
        <Font variant="num2" color="hilite_orange" align="center">
          60
        </Font>
      </VertiCardChild>
    </VertiCardWrapper>
  );
};

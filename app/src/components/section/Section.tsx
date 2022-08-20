import * as React from "react";

import Spacer from "../elements/Spacer";
import { Font } from "../font/Font";

import { SectionWrapper } from "./styled";

interface Props {
  title: string;
  children: any;
  mb?: number;
}
export const Section: React.FC<Props> = ({ title, children, mb }) => {
  return (
    <SectionWrapper mb={mb}>
      <Font variant="smb" spacing={1} caps color="lightblue">
        {title}
      </Font>
      <Spacer h={10} />
      {children}
    </SectionWrapper>
  );
};

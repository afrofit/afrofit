import * as React from "react";

import Spacer from "../elements/Spacer";
import { Font } from "../font/Font";

import { SectionWrapper } from "./styled";

interface Props {
  title: string;
  children: any;
}
export const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Font variant="smb" spacing={1} caps color="lightblue">
        {title}
      </Font>
      <Spacer h={10} />
      {children}
    </SectionWrapper>
  );
};

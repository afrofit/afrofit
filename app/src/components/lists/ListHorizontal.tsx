import * as React from "react";
import { Card } from "../cards/Card";
import { Font } from "../font/Font";
import { ListItemWrapper, StyledDivider, StyledFlatList } from "./styled";

export const ListHorizontal = () => {
  return (
    <Card disablePadding>
      <ListItemWrapper>
        <Font>2.1k</Font>
        <Font>Some content</Font>
      </ListItemWrapper>
      <StyledDivider />
      <ListItemWrapper>
        <Font>100</Font>
        <Font>Some content</Font>
      </ListItemWrapper>
      <StyledDivider />
      {/* <StyledFlatList /> */}
    </Card>
  );
};

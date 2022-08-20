import * as React from "react";
import { format } from "date-fns";

import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import { LargeButton } from "../../../../src/components/buttons/LargeButton";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../../../../app/store/reducers/auth/thunks/logout.thunk";
import { Avatar } from "../../../../../app/src/components/image/Avatar";
import { selectUser } from "../../../../../app/store/reducers/auth/auth.slice";
import { ProfileStatsContainer } from "../marathon/components/ProfileStatsItem.styled";
import { ProfileStatsItem } from "../marathon/components/ProfileStatsItem";
import Spacer from "../../../../../app/src/components/elements/Spacer";

import { Positioner } from "./styled";
import { Card } from "../../../../../app/src/components/cards/Card";
import { RankCard } from "../../../../../app/src/components/cards/RankCard";
import { RankPositioner } from "../../../../../app/src/components/cards/RankCard.styled";

export const ProfileScreen = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);

  const handleSignUserOut = () => {
    dispatch(LogOut());
  };

  if (!currentUser) return null;

  return (
    <>
      <SolidBackground />
      <Screen>
        <Card padding={15}>
          <Font variant="p" align="center" color="light">
            Your profile
          </Font>
        </Card>
        {/* <Spacer h={30} /> */}
        <Positioner>
          <Avatar size="sm" imageId={currentUser.displayPicId} />
          <RankPositioner>
            <RankCard rankId={1} size={40} />
          </RankPositioner>
        </Positioner>
        <Spacer h={20} />
        <Font variant="h3" align="center">
          {currentUser.firstName} {currentUser.lastName}
        </Font>
        <Spacer h={1} />
        <Font variant="pb" align="center" color="hilite_purpink">
          {currentUser.username}
        </Font>
        <Spacer h={8} />
        <Font variant="sm2" align="center" color="lightblue">
          CURRENT RANK: GENERAL
        </Font>

        <Spacer h={15} />
        <ProfileStatsContainer>
          <ProfileStatsItem description="Calories burned" value={100} />
          <Spacer h={5} />
          <ProfileStatsItem description="Body movements" value={100} />
          <Spacer h={5} />
          <ProfileStatsItem description="Dance time" value={100} />
        </ProfileStatsContainer>
        <LargeButton title="Log me out" onPress={handleSignUserOut} />
        <Spacer h={10} />
        <Font variant="sm2" caps align="center" color="lightblue">
          UserId: {currentUser.userId}
        </Font>
        <Spacer h={5} />
        <Font variant="sm2" align="center" color="lightblue">
          Joined on{" "}
          {format(new Date(currentUser.joinDate), "'the' io 'of' MMMM, yyyy")}
        </Font>
      </Screen>
    </>
  );
};

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
import {
  ProfileStatsContainer,
  ProfileStatsListWrapper,
} from "../marathon/components/ProfileStatsItem.styled";
import { ProfileStatsItem } from "../marathon/components/ProfileStatsItem";
import Spacer from "../../../../../app/src/components/elements/Spacer";

import { Positioner } from "./styled";
import { Card } from "../../../../../app/src/components/cards/Card";
import { RankCard } from "../../../../../app/src/components/cards/RankCard";
import { RankPositioner } from "../../../../../app/src/components/cards/RankCard.styled";
import { selectUserPerformance } from "../../../../../app/store/reducers/activity/activity.slice";
import { RANKS_DATA } from "../../../../../app/data/ranks-data";
import {
  selectCurrentUserRank,
  selectUserScoreIndex,
} from "../../../../../app/store/reducers/marathon/marathon.slice";

export const ProfileScreen = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);
  const userPerformance = useSelector(selectUserPerformance);
  const userScoreIndex = useSelector(selectUserScoreIndex);
  const currentUserRank = useSelector(selectCurrentUserRank);

  const handleSignUserOut = () => {
    dispatch(LogOut());
  };

  if (!currentUser || !userPerformance || currentUserRank < 0) return null;

  console.log("Stats", currentUserRank, userScoreIndex);

  return (
    <>
      <SolidBackground />
      <Screen>
        <Card padding={15}>
          <Font variant="p" align="center" color="light">
            Your profile
          </Font>
        </Card>
        <Positioner>
          <Avatar size="sm" imageId={currentUser.displayPicId} />
          <RankPositioner>
            <RankCard rankId={currentUserRank} />
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
        {/* <Spacer h={8} /> */}
        {/* <Font variant="sm2" align="center" color="lightblue">
          CURRENT RANK: {RANKS_DATA[currentUserRank].name}
        </Font> */}

        <Spacer h={15} />
        <ProfileStatsListWrapper showsVerticalScrollIndicator={false}>
          <ProfileStatsItem
            description="Calories burned"
            value={userPerformance.caloriesBurned}
          />
          <Spacer h={5} />
          <ProfileStatsItem
            description="Body movements"
            value={userPerformance.danceMoves}
          />
          <Spacer h={5} />
          <ProfileStatsItem
            description="Minutes danced"
            value={userPerformance.minutesDanced / 1000 / 60}
          />

          <Spacer h={10} />
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
        </ProfileStatsListWrapper>
      </Screen>
    </>
  );
};

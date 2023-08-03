import * as React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Font } from "../../../../src/components/font/Font";
import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import Spacer from "../../../../../app/src/components/elements/Spacer";
import { Card } from "../../../../../app/src/components/cards/Card";
import { selectUser } from "../../../../../app/store/reducers/auth/auth.slice";
import { FetchMarathonData } from "../../../../../app/store/reducers/story/thunks/fetch-marathon-data.thunk";
import {
  selectCurrentUserRank,
  selectMarathonData,
  selectUserScoreIndex,
} from "../../../../../app/store/reducers/marathon/marathon.slice";
import { RankingsTable } from "./components/RankingsTable";
import { RanksList } from "./components/RanksList";
import { ScrollView } from "react-native";
import { RankingsWrapper } from "./styled";

export const MarathonScreen = () => {
  const currentUser = useSelector(selectUser);
  const marathonData = useSelector(selectMarathonData);
  const userScoreIndex = useSelector(selectUserScoreIndex);
  const currentUserRank = useSelector(selectCurrentUserRank);

  return (
    <>
      <SolidBackground />
      <Screen>
        <Card padding={15}>
          <Font variant="p" align="center">
            The Marathon
          </Font>
        </Card>
        <Spacer />
        <RankingsWrapper>
        <RanksList currentUserRank={currentUserRank} />

        <RankingsTable
          rankings={marathonData}
          currentUserRank={currentUserRank}
          currentUser={currentUser}
          />
          </RankingsWrapper>
      </Screen>
    </>
  );
};

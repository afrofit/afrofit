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
  selectMarathonData,
  selectUserScoreIndex,
} from "../../../../../app/store/reducers/marathon/marathon.slice";
import { RankingsTable } from "./components/RankingsTable";
import { RanksList } from "./components/RanksList";

export const MarathonScreen = () => {
  const dispatch = useDispatch();

  const [activeRank, setActiveRank] = React.useState<number>(1);

  const currentUser = useSelector(selectUser);
  const marathonData = useSelector(selectMarathonData);
  const userScoreIndex = useSelector(selectUserScoreIndex);

  const fetchMarathonData = React.useCallback(() => {
    if (currentUser) {
      dispatch(FetchMarathonData(currentUser.userId));
    }
  }, [currentUser]);

  React.useEffect(() => {
    fetchMarathonData();
  }, []);

  const currentUserRank = React.useMemo(() => {
    if (userScoreIndex < 10) return 1;
    if (userScoreIndex > 10 && userScoreIndex < 35) return 2;
    if (userScoreIndex > 35 && userScoreIndex < 70) return 3;
    if (userScoreIndex > 70 && userScoreIndex < 120) return 4;
    if (userScoreIndex > 120) return 5;
    return 5;
  }, [userScoreIndex]);

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
        <RanksList currentUserRank={currentUserRank} />

        <RankingsTable
          rankings={marathonData}
          currentUserRank={currentUserRank}
          currentUser={currentUser}
        />
      </Screen>
    </>
  );
};

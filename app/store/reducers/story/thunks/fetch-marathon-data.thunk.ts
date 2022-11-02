import { AxiosError } from "axios";
import { ApiResponse } from "apisauce";

import API_CLIENT from "../../../../../app/api/api-client";
import { AppThunk } from "../../../../store/store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  setGenericErrorMessage,
} from "../../ui/ui.slice";
import {
  setCurrentUserRank,
  setMarathonData,
  setUserMarathonScoreIndex,
} from "../../marathon/marathon.slice";

const fetchMarathonDataApi = async (userId: string) => {
  return await API_CLIENT.get(`marathon/${userId}/`);
};

export function FetchMarathonData(userId: string): AppThunk {
  return async (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    try {
      const response: ApiResponse<any, any> = await fetchMarathonDataApi(
        userId
      );

      if (response && response.data) {
        const { marathon, userScoreIndex } = response.data;

        dispatch(setMarathonData(marathon));
        dispatch(setUserMarathonScoreIndex(userScoreIndex));

        const calcCurrentUserRank = (userScoreIndex: number) => {
          if (userScoreIndex === -1) return 1;
          if (userScoreIndex >= 0 && userScoreIndex < 10) return 5;
          if (userScoreIndex > 10 && userScoreIndex < 35) return 4;
          if (userScoreIndex > 35 && userScoreIndex < 70) return 3;
          if (userScoreIndex > 70 && userScoreIndex < 120) return 2;
          if (userScoreIndex > 120) return 1;
          return 5;
        };

        const currentUserRank = calcCurrentUserRank(userScoreIndex);

        console.log("From fetch", currentUserRank);

        dispatch(setCurrentUserRank(currentUserRank));
        return dispatch(finishedRequest());
      } else if (response && !response.ok && response.data) {
        dispatch(finishedRequest());
        return dispatch(
          setGenericErrorMessage(
            response.data ??
              `An error occured fetching your activity data for this story's chapters.`
          )
        );
      }
    } catch (error: unknown) {
      const err = error as AxiosError;
      console.log("Error!", err);
      dispatch(setGenericErrorMessage(` ${err.response?.data as string}`));
      dispatch(finishedRequest());
    }
  };
}

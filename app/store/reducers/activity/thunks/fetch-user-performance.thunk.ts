import { AxiosError } from "axios";
import { ApiResponse } from "apisauce";

import { AppThunk } from "../../../store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import API_CLIENT from "../../../../api/api-client";
import { PerformanceType } from "../types";
import { setUserPerformance } from "../activity.slice";

const fetchUserPerformanceApi = async (userId: string) => {
  return await API_CLIENT.get(`performance/overall/${userId}`);
};

export function GetUserPerformanceData(userId: string): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response: ApiResponse<any, any> = await fetchUserPerformanceApi(
        userId
      );
      if (response && response.data) {
        const { totalUserSteps, totalUserTime, caloriesBurned } =
          response.data.performance;

        const transformedData: PerformanceType = {
          danceMoves: totalUserSteps,
          minutesDanced: totalUserTime,
          caloriesBurned: caloriesBurned,
        };

        console.log("transformedData", transformedData);

        dispatch(setUserPerformance(transformedData));
      } else {
        dispatch(finishedRequest());
        return showGenericErrorDialog(
          `An error occured fetching your performance data.`
        );
      }
      dispatch(finishedRequest());
    } catch (error: any) {
      console.log("Error!", error.response.data);
      const err = error as AxiosError;
      dispatch(showGenericErrorDialog(` ${err.response?.data as string}`));
      dispatch(finishedRequest());
    }
  };
}

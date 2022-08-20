import { AxiosError } from "axios";
import { ApiResponse } from "apisauce";

import API_CLIENT from "../../../../../app/api/api-client";
import { AppThunk } from "../../../../store/store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import { setMarathonData } from "../../marathon/marathon.slice";

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
        console.log("Response from get marathon data", response.data);

        const { marathon } = response.data;

        dispatch(setMarathonData(marathon));
      } else {
        dispatch(finishedRequest());
        return showGenericErrorDialog(
          `An error occured fetching your activity data for this story's chapters.`
        );
      }
      dispatch(finishedRequest());
    } catch (error: unknown) {
      const err = error as AxiosError;
      console.log("Error!", err);
      dispatch(showGenericErrorDialog(` ${err.response?.data as string}`));
      dispatch(finishedRequest());
    }
  };
}

import { AxiosError } from "axios";
import { ApiResponse } from "apisauce";

import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  setGenericErrorMessage,
} from "../../ui/ui.slice";
import { AppThunk } from "../../../../store/store";
import API_CLIENT from "../../../../api/api-client";
import { setIsSubscribed } from "../auth.slice";

const checkCurrentUserSubscriptionApi = async (userId: string) => {
  return await API_CLIENT.post(`payments/retrieve-user-subscription/${userId}`);
};

export function CheckSubscriptionStatus(userId: string): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response: ApiResponse<any, any> =
        await checkCurrentUserSubscriptionApi(userId);
      console.log("response from check subscription", response.data);
      if (response && response.data) {
        const { activeSubscription } = response.data;

        dispatch(setIsSubscribed(activeSubscription));
      } else {
        dispatch(finishedRequest());
        return dispatch(
          setGenericErrorMessage(`An error occured logging you in.`)
        );
      }
      dispatch(finishedRequest());
    } catch (error: any) {
      console.log("Error!", error.response.data);
      const err = error as AxiosError;
      dispatch(setGenericErrorMessage(` ${err.response?.data as string}`));
      dispatch(finishedRequest());
    }
  };
}

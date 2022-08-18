import { AxiosError } from "axios";
import { ApiResponse } from "apisauce";

import { UserLoginCredentials } from "./../../../../types/UserLoginCredentials";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import { AppThunk } from "../../../../store/store";
import API_CLIENT from "../../../../api/api-client";
import DEVICE_STORAGE from "../../../../api/device-storage";
import { setCurrentUser, storeUserToken } from "../auth.slice";
import { UserModel } from "../../../../../app/types/UserModel";

const logInApi = async (userCredentials: UserLoginCredentials) => {
  const { email, password } = userCredentials;
  return await API_CLIENT.post("users/login", { email, password });
};

export function LogUserIn(userCredentials: UserLoginCredentials): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response: ApiResponse<any, any> = await logInApi(userCredentials);
      console.log("response from login", response.data);
      if (response && response.data) {
        const { token } = response.data;

        dispatch(storeUserToken(token as string));
        DEVICE_STORAGE.STORE_TOKEN(token as string);
        DEVICE_STORAGE.GET_STORED_USER().then((result: UserModel | null) => {
          console.log("user from login?: ", result);
          if (result) return dispatch(setCurrentUser(result));
        });
      } else {
        dispatch(finishedRequest());
        return showGenericErrorDialog(`An error occured logging you in.`);
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

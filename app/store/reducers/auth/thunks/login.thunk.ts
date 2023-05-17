import { AxiosError } from "axios";
import { ApiResponse } from "apisauce";

import { UserLoginCredentials } from "./../../../../types/UserLoginCredentials";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  setGenericErrorMessage,
} from "../../ui/ui.slice";
import { AppThunk } from "../../../../store/store";
import API_CLIENT from "../../../../api/api-client";
import DEVICE_STORAGE from "../../../../api/device-storage";
import { setCurrentUser, storeUserToken } from "../auth.slice";
import { UserModel } from "../../../../../app/types/UserModel";

const logInApi = async (userCredentials: UserLoginCredentials) => {
  const { email, password ,FCMToken,isDevice} = userCredentials;
 console.log(userCredentials,'userCredentials')
  return await API_CLIENT.post("users/login", { email, password,FCMToken,isDevice });
};

export function LogUserIn(userCredentials: UserLoginCredentials): AppThunk {
  return async (dispatch) => {
    if(userCredentials.isDevice==true){
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response: ApiResponse<any, any> = await logInApi(userCredentials);
      if (response && response.data && response.ok === true) {
        const { token } = response.data;

        dispatch(storeUserToken(token as string));
        DEVICE_STORAGE.STORE_TOKEN(token as string);
        DEVICE_STORAGE.GET_STORED_USER().then((result: UserModel | null) => {
          console.log("user from login?: ", result);
          if (result) {
            dispatch(setCurrentUser(result));
            dispatch(finishedRequest());

            return;
          }
        });
      } 
      else if (response && !response.ok && response.data) {
        dispatch(
          setGenericErrorMessage(
            response.data ?? "There was an error logging in"
          )
        );
        return dispatch(finishedRequest());
      }
    } catch (error: any) {
      console.log("Error!", error.response.data);
      const err = error as AxiosError;
      const errorMessage =
        (err.response?.data as string) ??
        "An error occured trying to log you in.";
      dispatch(setGenericErrorMessage(errorMessage));
      dispatch(finishedRequest());
    }

  }else{
    dispatch(setGenericErrorMessage('something went wrong!'));
    dispatch(finishedRequest()); 
  }
};
}

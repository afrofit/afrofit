import { AppThunk } from "../../../../store/store";
import DEVICE_STORAGE from "../../../../../app/api/device-storage";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  setGenericErrorMessage,
} from "../../ui/ui.slice";
import { logout } from "../auth.slice";
import API_CLIENT from "../../../../../app/api/api-client";
import { ApiResponse } from "apisauce";
import { AxiosError } from "axios";

const logoutApi = async (FCMToken:string,userId:string) => {
  console.log(userId,FCMToken,"logout api time")
  return await API_CLIENT.post("users/signOut", { userId, FCMToken });
};

export function LogOut(FCMToken:string,userId:string): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response: ApiResponse<any, any> = await logoutApi(
        `${FCMToken}`,userId
      );
      console.log(response,"$$$")
      if (response && response.data && response.ok === true) {
        console.log(response.data,"response data from api")
        DEVICE_STORAGE.REMOVE_TOKEN()
          .catch((error) => {
            dispatch(setGenericErrorMessage(error.message));
            console.error(error);
            dispatch(finishedRequest());
          })
          .then(() => {
            DEVICE_STORAGE.REMOVE_RESET_TOKEN; 
            dispatch(finishedRequest());           
          })
          .then(() => {
            dispatch(logout());
            dispatch(finishedRequest());
          });
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
  };
}

import { AxiosError } from "axios";
import { ApiResponse } from "apisauce";
import API_CLIENT from "../../../../../app/api/api-client";
import { AppThunk } from "app/store/store";
import { finishedRequest, hideGenericErrorDialog, newRequest, setGenericErrorMessage } from "../../ui/ui.slice";
import { UpdateUser } from "app/types/UpdateUser";
import {  setCurrentUser, storeUserToken} from "../../../../store/reducers/auth/auth.slice";
import DEVICE_STORAGE from "../../../../api/device-storage";
import { UserModel } from "app/types/UserModel";


const userApi = async (userId:any, displayPicId:any) => {
  return await API_CLIENT.post(`users/update-dp/${userId}`, displayPicId);
  };




export function UpdateUserProfile(userId: any,displayPicId:any): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response: ApiResponse<any,any>=await userApi(userId,displayPicId);
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
      } else if (response && !response.ok && response.data) {
        dispatch(
          setGenericErrorMessage(
            response.data ?? "There was an error in update user"
          )
        );
        return dispatch(finishedRequest());
      }
    } catch (error: any) {
      console.log("Error!", error.response.data);
      const err = error as AxiosError;
      const errorMessage =
        (err.response?.data as string) ??
        "An error occured trying to update user.";
      dispatch(setGenericErrorMessage(errorMessage));
      dispatch(finishedRequest());
    }
  };
}

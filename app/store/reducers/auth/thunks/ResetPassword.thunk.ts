import { AxiosError } from "axios";
import { ApiResponse } from "apisauce";
import { AppThunk } from "../../../store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  setGenericErrorMessage,
  triggerActionCompleted,
} from "../../ui/ui.slice";
import API_CLIENT from "../../../../api/api-client";
import { UserForgotPassword } from "app/types/UserLoginCredentials";


const forgotPasswordApi = async (userCredentials:UserForgotPassword) => {
  const { email} = userCredentials;
  return await API_CLIENT.post("users/send-password-reset-link", { email});
};


export function SendPasswordResetEmail(userCredentials: UserForgotPassword): AppThunk {
  return async (dispatch) => {
    if(userCredentials.email){
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());
      const response: ApiResponse<any, any> = await forgotPasswordApi(userCredentials);
      if (response && response.data && response.ok === true) {
        dispatch(triggerActionCompleted(true))
        dispatch(finishedRequest());
      } 
      else if (response && !response.ok && response.data) {
        dispatch(
          setGenericErrorMessage(
            response.data ?? "There was an error resetpassword in"
          )
        );
        return dispatch(finishedRequest());
      }
    } catch (error: any) {
      console.log("Error!", error.response.data);
      const err = error as AxiosError;
      const errorMessage =
        (err.response?.data as string) ??
        "An error occured trying to forgotpassword.";
      dispatch(setGenericErrorMessage(errorMessage));
      dispatch(finishedRequest());
    }

  }else{
    dispatch(setGenericErrorMessage('something went wrong!'));
    dispatch(finishedRequest()); 
  }
};
}



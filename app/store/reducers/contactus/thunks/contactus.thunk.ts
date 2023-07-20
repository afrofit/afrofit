import { ApiResponse } from "apisauce";
import API_CLIENT from "../../../../api/api-client";
import { AppThunk } from "app/store/store";
import { AxiosError } from "axios";
import { finishedRequest, hideGenericErrorDialog, newRequest, setGenericErrorMessage } from "../../ui/ui.slice";
import { setContactus } from "../../contactus/contactus.slice";
import { ContactusType } from "app/types/ContactusModel";


const classApi = async (payload:ContactusType) => {
  console.log(payload,"payload from api side")
    return await API_CLIENT.post(`contact/create`);
    };
  
    export function contactusCreate(payload:ContactusType): AppThunk {
        return async (dispatch) => {
          try {
            dispatch(newRequest());
            dispatch(hideGenericErrorDialog());
      
            const response: ApiResponse<any,any>=await classApi(payload);
            if (response && response.data && response.ok === true) {
              console.log("api res",response)
             await dispatch(finishedRequest());
              return response

            } else if (response && !response.ok && response.data) {
              dispatch(
                setGenericErrorMessage(
                  response.data ?? "There was an error in contact us"
                )
              );
              return dispatch(finishedRequest());
            }
          } catch (error: any) {
            console.log("Error!", error.response.data);
            const err = error as AxiosError;
            const errorMessage =
              (err.response?.data as string) ??
              "An error occured in ";
            dispatch(setGenericErrorMessage(errorMessage));
            dispatch(finishedRequest());
          }
        };
      }
      
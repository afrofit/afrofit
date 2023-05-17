import { ApiResponse } from "apisauce";
import API_CLIENT from "./../../../../../app/api/api-client";
import { AppThunk } from "app/store/store";
import { AxiosError } from "axios";
import { finishedRequest, hideGenericErrorDialog, newRequest, setGenericErrorMessage } from "../../ui/ui.slice";
import { setAllEvents } from "../events.slice";

const eventApi = async () => {
    return await API_CLIENT.get(`events`);
    };
  
    export function getEvents(): AppThunk {
        return async (dispatch) => {
          try {
            dispatch(newRequest());
            dispatch(hideGenericErrorDialog());
      
            const response: ApiResponse<any,any>=await eventApi();
            if (response && response.data && response.ok === true) {
                    dispatch(setAllEvents(response.data.data))
                    dispatch(finishedRequest());


            } else if (response && !response.ok && response.data) {
              dispatch(
                setGenericErrorMessage(
                  response.data ?? "There was an error in event"
                )
              );
              return dispatch(finishedRequest());
            }
          } catch (error: any) {
            console.log("Error!", error.response.data);
            const err = error as AxiosError;
            const errorMessage =
              (err.response?.data as string) ??
              "An error occured trying to get events.";
            dispatch(setGenericErrorMessage(errorMessage));
            dispatch(finishedRequest());
          }
        };
      }
      
import { AppThunk } from "../../../store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";

export function FetchTodaysActivity(userId: string): AppThunk {
  return async (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    try {
    } catch (error) {
      dispatch(finishedRequest());
      console.error(error);
      dispatch(
        showGenericErrorDialog(
          "Error! An error occurred fetching daily acitivity."
        )
      );
    }
  };
}

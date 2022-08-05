import { AppThunk } from "../../../store";
import { hideGenericErrorDialog, newRequest } from "../../ui/ui.slice";

export function FetchUserStoryActivity(
  storyId: string,
  userId: string
): AppThunk {
  return (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());
  };
}

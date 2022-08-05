import { AppThunk } from "../../../../store/store";
import { hideGenericErrorDialog, newRequest } from "../../ui/ui.slice";

export function FetchStoryChapters(storyId: string, userId: string): AppThunk {
  return (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());
  };
}

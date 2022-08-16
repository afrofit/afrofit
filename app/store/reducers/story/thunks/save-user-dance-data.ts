import { ChapterPlayedType } from "./../../../../types/ChapterModel";
import { CHAPTER_DATA } from "./../../../../data/chapter_data";
import { ApiResponse } from "apisauce";
import API_CLIENT from "../../../../../app/api/api-client";
import { AppThunk } from "../../../../store/store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import { AxiosError } from "axios";
import { SaveDanceDataType } from "../../../../../app/types/SaveDanceDataModel";

const saveUserDanceDataApi = async (
  userId: string,
  chapterId: string,
  playedStoryId: string,
  saveData: SaveDanceDataType
) => {
  return await API_CLIENT.post(
    `performance/activity/story/chapters/${userId}/${chapterId}/${playedStoryId}`,
    { data: saveData }
  );
};

export function SaveUserDanceData(
  userId: string,
  chapterId: string,
  playedStoryId: string,
  saveData: SaveDanceDataType
): AppThunk {
  return async (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    try {
      const response: ApiResponse<any, any> = await saveUserDanceDataApi(
        userId,
        chapterId,
        playedStoryId,
        saveData
      );

      if (response && response.data) {
        console.log("Response from save dance data", response.data);
        // const { chapters } = response.data;

        // dispatch(setCurrentChapters(currentChapters));
      } else {
        dispatch(finishedRequest());
        return showGenericErrorDialog(
          `An error occured fetching your activity data for this story's chapters.`
        );
      }
      dispatch(finishedRequest());
    } catch (error: unknown) {
      const err = error as AxiosError;
      console.log("Error!", err);
      dispatch(showGenericErrorDialog(` ${err.response?.data as string}`));
      dispatch(finishedRequest());
    }
  };
}

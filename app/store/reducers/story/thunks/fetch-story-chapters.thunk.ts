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
import { setCurrentChapters } from "../story.slice";

const fetchUserStoryChaptersApi = async (
  userId: string,
  storyId: string,
  playedStoryId: string
) => {
  return await API_CLIENT.get(
    `performance/activity/story/chapters/${userId}/${storyId}/${playedStoryId}`
  );
};

export function FetchStoryChapters(
  storyId: string,
  userId: string,
  playedStoryId: string
): AppThunk {
  return async (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    try {
      const response: ApiResponse<any, any> = await fetchUserStoryChaptersApi(
        userId,
        storyId,
        playedStoryId
      );

      if (response && response.data) {
        console.log("Response from get story chapters", response.data);
        const { chapters } = response.data;

        const CURRENT_CHAPTERS = CHAPTER_DATA.filter(
          (chapter) => chapter.storyId === storyId
        );

        const currentChapters: ChapterPlayedType[] = CURRENT_CHAPTERS.map(
          (chapter) => {
            if (chapters && chapters[chapter.id]) {
              return {
                ...chapter,
                userSteps: chapters[chapter.id].userSteps,
                userTime: chapters[chapter.id].userTime,
              };
            }
            return {
              ...chapter,
              userSteps: 0,
              userTime: 0,
            };
          }
        );

        console.log(
          "Current chapters",
          currentChapters.map((chapter) => chapter.userSteps)
        );
        dispatch(setCurrentChapters(currentChapters));
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

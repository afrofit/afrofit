import { ApiResponse } from "apisauce";
import { CHAPTER_DATA } from "../../../../../app/data/chapter_data";
import API_CLIENT from "../../../../../app/api/api-client";
import { AppThunk } from "../../../store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  setGenericErrorMessage,
} from "../../ui/ui.slice";
import { ChapterPlayedType } from "../../../../../app/types/ChapterModel";
import { setCurrentChapter } from "../story.slice";
import { AxiosError } from "axios";

const fetchChapterDetailApi = async (
  userId: string,
  storyId: string,
  chapterId: string
) => {
  return await API_CLIENT.get(
    `performance/activity/story/chapter/${userId}/${storyId}/${chapterId}`
  );
};

export function FetchChapterDetail(
  userId: string,
  storyId: string,
  chapterId: string
): AppThunk {
  return async (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    try {
      const response: ApiResponse<any, any> = await fetchChapterDetailApi(
        userId,
        storyId,
        chapterId
      );

      if (response && response.data) {
        const { chapter } = response.data;

        const CURRENT_CHAPTER = CHAPTER_DATA.filter(
          (chapter) => chapter.storyId === storyId
        ).find((chapter) => chapter.id === chapterId);

        if (!CURRENT_CHAPTER)
          throw new Error("Cannot find chapter information!");

        const currentChapter: ChapterPlayedType = {
          playedChapterId: chapter.id,
          id: CURRENT_CHAPTER.id,
          order: CURRENT_CHAPTER.order,
          storyId: CURRENT_CHAPTER.storyId,
          targetSteps: CURRENT_CHAPTER.targetSteps,
          userSteps: chapter.userSteps,
          userTime: chapter.userTime,
          videoUrl: CURRENT_CHAPTER.videoUrl,
        };
        dispatch(setCurrentChapter(currentChapter));
      } else if (response && !response.ok && response.data) {
        dispatch(finishedRequest());
        return dispatch(
          setGenericErrorMessage(
            response.data ??
              `An error occured fetching your activity data for this story.`
          )
        );
      }
      dispatch(finishedRequest());
    } catch (error: unknown) {
      const err = error as AxiosError;
      console.log("Error!", err);
      dispatch(setGenericErrorMessage(` ${err.response?.data as string}`));
      dispatch(finishedRequest());
    }
  };
}

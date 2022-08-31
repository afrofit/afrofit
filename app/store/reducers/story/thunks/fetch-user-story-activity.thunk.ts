import { CHAPTER_DATA } from "./../../../../data/chapter_data";
import { PlayedStoryType } from "../../../../types/StoryModel";
import { AxiosError } from "axios";
import { STORY_DATA } from "../../../../data/story_data";
import { AppThunk } from "../../../store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  setGenericErrorMessage,
} from "../../ui/ui.slice";
import { setCurrentStory } from "../story.slice";
import API_CLIENT from "../../../../api/api-client";
import { ApiResponse } from "apisauce";

const fetchUserStoryActivityApi = async (userId: string, storyId: string) => {
  return await API_CLIENT.get(
    `performance/activity/story/${userId}/${storyId}`
  );
};

export function FetchUserStoryActivity(
  storyId: string,
  userId: string
): AppThunk {
  return async (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    try {
      const response: ApiResponse<any, any> = await fetchUserStoryActivityApi(
        userId,
        storyId
      );

      if (response && response.data) {
        console.log("Story activity response", response.data);
        const {
          userSteps,
          userTime,
          id: playedStoryId,
          lastChapterCompleted,
        } = response.data.playedStory;

        const CURRENT_STORY = STORY_DATA.find((story) => story.id === storyId);

        if (!CURRENT_STORY) {
          throw new Error("No current story found. Curious error!");
        }

        const totalTargetSteps = CHAPTER_DATA.filter(
          (chapter) => chapter.storyId === CURRENT_STORY!.id
        )
          .map((chapter) => chapter.targetSteps)
          .reduce((acc, curr) => acc + curr, 0);

        const currentStory: PlayedStoryType = {
          ...CURRENT_STORY,
          totalTargetSteps,
          userSteps,
          userTime,
          playedStoryId,
          lastChapterCompleted,
        };
        dispatch(setCurrentStory(currentStory));
      } else {
        dispatch(finishedRequest());
        return dispatch(
          setGenericErrorMessage(
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

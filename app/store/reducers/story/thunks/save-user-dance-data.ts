import { STORY_DATA } from "./../../../../data/story_data";
import { ChapterPlayedType } from "./../../../../types/ChapterModel";
import { CHAPTER_DATA } from "./../../../../data/chapter_data";
import { ApiResponse } from "apisauce";
import API_CLIENT from "../../../../../app/api/api-client";
import DEVICE_STORAGE from "../../../../../app/api/device-storage";
import { AppThunk } from "../../../../store/store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import { AxiosError } from "axios";
import { SaveDanceDataType } from "../../../../../app/types/SaveDanceDataModel";
import {
  setCurrentChapter,
  setCurrentChapters,
  setCurrentStory,
  updateCurrentChapters,
} from "../story.slice";
import { PlayedStoryType } from "../../../../../app/types/StoryModel";
import { setCurrentUser, storeUserToken } from "../../auth/auth.slice";
import { UserModel } from "../../../../../app/types/UserModel";

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
  saveData: SaveDanceDataType,
  currentStoredStory: PlayedStoryType
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
        // console.log("Response from save dance data", response.data);
        const {
          chapter: fetchedChapter,
          performance,
          story: fetchedStory,
          token,
        } = response.data;

        const rawChapter = CHAPTER_DATA.find((chapter) => {
          return chapter.id === fetchedChapter.chapterId;
        });

        if (!rawChapter) throw new Error("Cannot find existing chapter.");

        const rawStory = STORY_DATA.find(
          (story) => story.id === fetchedStory.storyId
        );

        if (!rawStory) throw new Error("Cannot find existing story.");

        const currentChapter: ChapterPlayedType = {
          ...rawChapter,
          userSteps: fetchedChapter.userSteps,
          userTime: fetchedChapter.userTime,
        };

        if (!currentStoredStory)
          throw new Error("Cannot find current stored story.");

        const currentStory: PlayedStoryType = {
          ...rawStory,
          userSteps: fetchedStory.userSteps,
          userTime: fetchedStory.userTime,
          lastChapterCompleted: fetchedStory.lastChapterCompleted,
          totalTargetSteps: currentStoredStory.totalTargetSteps,
          playedStoryId: currentStoredStory.playedStoryId,
        };

        if (token) {
          dispatch(storeUserToken(token as string));
          DEVICE_STORAGE.STORE_TOKEN(token as string);
          DEVICE_STORAGE.GET_STORED_USER().then((user: UserModel | null) => {
            console.log("user from updated lastStoryCompleted?: ", user);
            if (user) return dispatch(setCurrentUser(user));
          });
        }

        console.log("Current Chapter from thunk", currentChapter);
        console.log("Current Story from thunk", currentStory);
        dispatch(setCurrentChapter(currentChapter));
        dispatch(setCurrentStory(currentStory));
        dispatch(updateCurrentChapters(currentChapter));
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

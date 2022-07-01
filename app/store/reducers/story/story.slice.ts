import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChapterType, StoryType, PlayedStoryType } from "../../../utils/types";
import { RootState } from "../../store";

export interface StoryState {
  currentStory: PlayedStoryType | null;
  currentChapter: ChapterType | null;
}

const initialState: StoryState = {
  currentStory: null,
  currentChapter: null,
};

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    setCurrentStory(state, action: PayloadAction<any>) {
      state.currentStory = action.payload;
    },
    setCurrentChapter(state, action: PayloadAction<any>) {
      state.currentStory = action.payload;
    },
    unSetCurrentStory(state) {
      state.currentStory = initialState.currentStory;
    },
    unSetCurrentChapter(state) {
      state.currentChapter = initialState.currentChapter;
    },
  },
});

export const {
  setCurrentStory,
  setCurrentChapter,
  unSetCurrentStory,
  unSetCurrentChapter,
} = storySlice.actions;

export const selectCurrentStory = (state: RootState) =>
  state.story.currentStory;

export const selectCurrentChapter = (state: RootState) =>
  state.story.currentChapter;

export default storySlice.reducer;

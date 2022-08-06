import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChapterType } from "../../../types/ChapterModel";
import { PlayedStoryType } from "../../../types/StoryModel";
import { RootState } from "../../store";

export interface StoryState {
  currentStory: PlayedStoryType | null;
  currentChapter: ChapterType | null;
  currentChapters: ChapterType[] | null;
}

const initialState: StoryState = {
  currentStory: null,
  currentChapter: null,
  currentChapters: null,
};

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    setCurrentStory(state, action: PayloadAction<PlayedStoryType>) {
      state.currentStory = action.payload;
    },
    setCurrentChapter(state, action: PayloadAction<ChapterType>) {
      state.currentChapter = action.payload;
    },
    setCurrentChapters(state, action: PayloadAction<ChapterType[]>) {
      state.currentChapters = action.payload;
    },
    unSetCurrentStory(state) {
      state.currentStory = initialState.currentStory;
    },
    unSetCurrentChapter(state) {
      state.currentChapter = initialState.currentChapter;
    },
    unSetCurrentChapters(state) {
      state.currentChapters = initialState.currentChapters;
    },
  },
});

export const {
  setCurrentStory,
  setCurrentChapter,
  unSetCurrentStory,
  unSetCurrentChapter,
  setCurrentChapters,
  unSetCurrentChapters,
} = storySlice.actions;

export const selectCurrentStory = (state: RootState) =>
  state.story.currentStory;

export const selectCurrentChapter = (state: RootState) =>
  state.story.currentChapter;

export const selectCurrentChapters = (state: RootState) =>
  state.story.currentChapters;

export default storySlice.reducer;

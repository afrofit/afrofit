import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChapterPlayedType } from "../../../types/ChapterModel";
import { PlayedStoryType } from "../../../types/StoryModel";
import { RootState } from "../../store";

export interface StoryState {
  currentStory: PlayedStoryType | null;
  currentChapter: ChapterPlayedType | null;
  currentChapters: ChapterPlayedType[] | null;
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
    setCurrentChapter(state, action: PayloadAction<ChapterPlayedType>) {
      state.currentChapter = action.payload;
    },
    setCurrentChapters(state, action: PayloadAction<ChapterPlayedType[]>) {
      state.currentChapters = action.payload.sort((a, b) =>
        a.order > b.order ? 1 : -1
      );
    },
    updateCurrentChapters(state, action: PayloadAction<ChapterPlayedType>) {
      const newChapter = action.payload;
      if (state.currentChapters && state.currentChapters.length > 0) {
        const filteredCurrentChapters = state.currentChapters.filter(
          (stateChapter) => stateChapter.id !== action.payload.id
        );
        state.currentChapters = [...filteredCurrentChapters, newChapter].sort(
          (a, b) => (a.order > b.order ? 1 : -1)
        );
      } else {
        state.currentChapters = state.currentChapters;
      }
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
  updateCurrentChapters,
  unSetCurrentChapters,
} = storySlice.actions;

export const selectCurrentStory = (state: RootState) =>
  state.story.currentStory;

export const selectCurrentChapter = (state: RootState) =>
  state.story.currentChapter;

export const selectCurrentChapters = (state: RootState) =>
  state.story.currentChapters;

export default storySlice.reducer;

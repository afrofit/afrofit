import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type MarathonType = { name: string; score: number; userId: string };
export interface MarathonState {
  marathon: MarathonType[] | null;
  userScoreIndex: number;
  currentUserRank: number;
}

const initialState: MarathonState = {
  marathon: null,
  userScoreIndex: -1,
  currentUserRank: 1,
};

const marathonSlice = createSlice({
  name: "marathon",
  initialState,
  reducers: {
    setMarathonData(state, action: PayloadAction<MarathonType[]>) {
      state.marathon = action.payload;
    },
    setUserMarathonScoreIndex(state, action: PayloadAction<number>) {
      state.userScoreIndex = action.payload;
    },
    setCurrentUserRank(state, action: PayloadAction<number>) {
      state.currentUserRank = action.payload;
    },
  },
});

export const {
  setMarathonData,
  setUserMarathonScoreIndex,
  setCurrentUserRank,
} = marathonSlice.actions;

export const selectCurrentUserRank = (state: RootState) =>
  state.marathon.currentUserRank;
export const selectMarathonData = (state: RootState) => state.marathon.marathon;
export const selectUserScoreIndex = (state: RootState) =>
  state.marathon.userScoreIndex;

export default marathonSlice.reducer;

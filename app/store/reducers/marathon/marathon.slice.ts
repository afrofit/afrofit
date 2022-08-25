import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type MarathonType = { name: string; score: number };
export interface MarathonState {
  marathon: MarathonType[] | null;
  userScoreIndex: number;
}

const initialState: MarathonState = {
  marathon: null,
  userScoreIndex: -1,
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
  },
});

export const { setMarathonData, setUserMarathonScoreIndex } =
  marathonSlice.actions;

export const selectMarathonData = (state: RootState) => state.marathon.marathon;
export const selectUserScoreIndex = (state: RootState) =>
  state.marathon.userScoreIndex;

export default marathonSlice.reducer;

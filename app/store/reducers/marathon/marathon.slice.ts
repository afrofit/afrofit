import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type MarathonType = { name: string; score: number };
export interface MarathonState {
  marathon: MarathonType[] | null;
}

const initialState: MarathonState = {
  marathon: null,
};

const marathonSlice = createSlice({
  name: "marathon",
  initialState,
  reducers: {
    setMarathonData(state, action: PayloadAction<MarathonType[]>) {
      state.marathon = action.payload;
    },
  },
});

export const { setMarathonData } = marathonSlice.actions;

export const selectMarathonData = (state: RootState) => state.marathon.marathon;

export default marathonSlice.reducer;

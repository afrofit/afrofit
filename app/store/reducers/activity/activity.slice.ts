import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PerformanceType, TodaysActivityType } from "./types";

export interface PerformanceState {
  performance: PerformanceType;
  todaysActivity: TodaysActivityType;
}

const initialState: PerformanceState = {
  todaysActivity: {
    bodyMovements: 0,
    caloriesBurned: 0,
  },
  performance: {
    caloriesBurned: 0,
    danceMoves: 0,
    minutesDanced: 0,
  },
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    setTodaysActivity(state, action: PayloadAction<TodaysActivityType>) {
      state.todaysActivity = action.payload;
    },
    setUserPerformance(state, action: PayloadAction<PerformanceType>) {
      const { danceMoves, minutesDanced, caloriesBurned } = action.payload;
      state.performance = { danceMoves, minutesDanced, caloriesBurned };
    },
    resetActivityData(state) {
      state = initialState;
    },
  },
});

export const { setTodaysActivity, setUserPerformance, resetActivityData } =
  activitySlice.actions;

export const selectTodaysActivity = (state: RootState) =>
  state.activity.todaysActivity;
export const selectUserPerformance = (state: RootState) =>
  state.activity.performance;

export default activitySlice.reducer;

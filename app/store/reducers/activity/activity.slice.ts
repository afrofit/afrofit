import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TodaysActivityType } from "./types";

type ActivityState = TodaysActivityType;

const initialState: Omit<ActivityState, "user_id" | "id" | "local_date"> = {
  calories_burned: 0,
  body_movements: 0,
};

const CALORIE_MULTPLIER = 0.00175;

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    updateTodaysActivity(state, action: PayloadAction<ActivityState>) {
      const { body_movements } = action.payload;
      state.body_movements += body_movements;
      state.calories_burned += body_movements * CALORIE_MULTPLIER;
    },
    setTodaysActivity(state, action: PayloadAction<ActivityState>) {
      const { body_movements } = action.payload;
      state.body_movements = body_movements;
      state.calories_burned = body_movements * CALORIE_MULTPLIER;
    },
    resetTodaysActivity(state) {
      state = initialState;
    },
  },
});

export const { setTodaysActivity, resetTodaysActivity, updateTodaysActivity } =
  activitySlice.actions;

export const selectTodaysActivity = (state: RootState) => {
  return {
    calories_burned: state.activity.calories_burned,
    body_movements: state.activity.body_movements,
  };
};

export default activitySlice.reducer;

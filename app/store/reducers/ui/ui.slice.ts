import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface UIState {
  requestsLoading: number;
  showGenericErrorDialog: string;
  isSubmitting: boolean;
}

const initialState: UIState = {
  requestsLoading: 0,
  showGenericErrorDialog: "",
  isSubmitting: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    newRequest(state) {
      state.requestsLoading = state.requestsLoading + 1;
    },
    finishedRequest(state) {
      state.requestsLoading = state.requestsLoading - 1;
    },
    showGenericErrorDialog(state, action: PayloadAction<string>) {
      state.showGenericErrorDialog = action.payload;
    },
    hideGenericErrorDialog(state) {
      state.showGenericErrorDialog = "";
    },

    setIsSubmitting(state, action: PayloadAction<boolean>) {
      state.isSubmitting = action.payload;
    },
  },
});

export const {
  newRequest,
  finishedRequest,
  showGenericErrorDialog,
  hideGenericErrorDialog,
  setIsSubmitting,
} = uiSlice.actions;

export const selectUiIsLoading = (state: RootState) =>
  state.ui.requestsLoading > 0;

export const selectShowGenericErrorDialog = (state: RootState) =>
  state.ui.showGenericErrorDialog;

export const selectIsSubmitting = (state: RootState) => state.ui.isSubmitting;

export default uiSlice.reducer;

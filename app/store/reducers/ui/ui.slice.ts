import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface UIState {
  requestsLoading: number;
  isSubmitting: boolean;
  genericErrorMessage: string;
  loaderMessage: string;
  actionCompleted: boolean;
}

const initialState: UIState = {
  requestsLoading: 0,
  isSubmitting: false,
  genericErrorMessage: "",
  loaderMessage: "Loading...",
  actionCompleted: false,
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
    setGenericErrorMessage(state, action: PayloadAction<string>) {
      state.genericErrorMessage = action.payload;
    },
    setLoaderMessage(state, action: PayloadAction<string>) {
      state.loaderMessage = action.payload;
    },
    unsetLoaderMessage(state) {
      state.loaderMessage = "";
    },

    hideGenericErrorDialog(state) {
      state.genericErrorMessage = "";
    },
    setIsSubmitting(state, action: PayloadAction<boolean>) {
      state.isSubmitting = action.payload;
    },
    triggerActionCompleted(state, action: PayloadAction<boolean>) {
      state.actionCompleted = action.payload;
    },
  },
});

export const {
  newRequest,
  finishedRequest,
  setGenericErrorMessage,
  hideGenericErrorDialog,
  setIsSubmitting,
  setLoaderMessage,
  unsetLoaderMessage,
  triggerActionCompleted,
} = uiSlice.actions;

export const selectUiIsLoading = (state: RootState) =>
  state.ui.requestsLoading > 0;

export const selectGenericErrorMessage = (state: RootState) =>
  state.ui.genericErrorMessage;

export const selectLoaderMessage = (state: RootState) => state.ui.loaderMessage;

export const selectIsSubmitting = (state: RootState) => state.ui.isSubmitting;

export const selectedActionCompleted = (state: RootState) =>
  state.ui.actionCompleted;

export default uiSlice.reducer;

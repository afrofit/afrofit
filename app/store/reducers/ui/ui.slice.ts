import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface UIState {
  requestsLoading: number;
  showGenericErrorDialog: boolean;
  isSubmitting: boolean;
  genericErrorMessage: string;
  loaderMessage: string;
}

const initialState: UIState = {
  requestsLoading: 0,
  showGenericErrorDialog: false,
  isSubmitting: false,
  genericErrorMessage: "",
  loaderMessage: "Loading...",
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
    showGenericErrorDialog(state, action: PayloadAction<boolean>) {
      state.showGenericErrorDialog = action.payload;
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
    unsetGenericErrorMessage(state) {
      state.genericErrorMessage = "";
    },
    hideGenericErrorDialog(state) {
      state.showGenericErrorDialog = false;
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
  setGenericErrorMessage,
  unsetGenericErrorMessage,
  setLoaderMessage,
  unsetLoaderMessage,
} = uiSlice.actions;

export const selectUiIsLoading = (state: RootState) =>
  state.ui.requestsLoading > 0;

export const selectShowGenericErrorDialog = (state: RootState) =>
  state.ui.showGenericErrorDialog;

export const selectGenericErrorMessage = (state: RootState) =>
  state.ui.genericErrorMessage;

export const selectLoaderMessage = (state: RootState) => state.ui.loaderMessage;

export const selectIsSubmitting = (state: RootState) => state.ui.isSubmitting;

export default uiSlice.reducer;

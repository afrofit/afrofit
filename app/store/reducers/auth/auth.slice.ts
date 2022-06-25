import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../../../models/user.model";
import { RootState } from "../../store";

export interface AuthState {
  currentUser: UserModel | null;
}

const initialState: AuthState = {
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<any>) {
      state.currentUser = action.payload;
    },
    unsetCurrentUser(state) {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, unsetCurrentUser } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.currentUser;

export default authSlice.reducer;

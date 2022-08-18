import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../../../../app/types/UserModel";
import { RootState } from "../../store";

export interface AuthState {
  currentUser?: UserModel | null;
  token: string | null;
  isSubscribed: boolean;
}

const initialState: AuthState = {
  token: null,
  isSubscribed: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<any>) {
      state.currentUser = action.payload;
    },
    storeUserToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setIsSubscribed(state, action: PayloadAction<boolean>) {
      state.isSubscribed = action.payload;
    },
    logout() {
      return initialState;
    },
  },
});

export const { setCurrentUser, storeUserToken, setIsSubscribed, logout } =
  authSlice.actions;

export const selectUserIsSubscribed = (state: RootState) =>
  state.auth.isSubscribed;
export const selectUserIsLoggedIn = (state: RootState) =>
  !!state.auth.currentUser;
export const selectUser = (state: RootState) => state.auth.currentUser;
export const selectUserToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;

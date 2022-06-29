import { UserProfileModel } from "./../../../models/userprofile.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../../../models/user.model";
import { RootState } from "../../store";

export interface AuthState {
  currentUser: any;
  currentUserProfile: UserProfileModel | null;
}

const initialState: AuthState = {
  currentUser: null,
  currentUserProfile: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<any>) {
      state.currentUser = action.payload;
    },
    setCurrentUserProfile(state, action: PayloadAction<UserProfileModel>) {
      state.currentUserProfile = action.payload;
    },
    // updateCurrentUserProfilePic(state, action: PayloadAction<string>) {
    //   state.currentUserProfile = {...state.currentUserProfile, profile_pic: action.payload}
    // },
    unsetCurrentUser(state) {
      state.currentUser = null;
    },
    unsetCurrentUserProfile(state) {
      state.currentUser = null;
    },
  },
});

export const {
  setCurrentUser,
  setCurrentUserProfile,
  unsetCurrentUser,
  unsetCurrentUserProfile,
} = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectCurrentUserProfile = (state: RootState) =>
  state.auth.currentUserProfile;

export default authSlice.reducer;

import { FetchUserCurrentUserProfle } from "../../store/reducers/auth/auth.thunks";
import { useDispatch } from "react-redux";
import * as React from "react";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const useAuth = () => {
  const dispatch = useDispatch();
  const checkUserAuth = () => {
    return onAuthStateChanged(auth, (user) => {
      console.log("Checking for user...");
      if (user) {
        console.log("User from firebase...", user.uid);
        dispatch(FetchUserCurrentUserProfle(user.uid));
        // fetch user profile from firebase and set currentUserProfile
      } else {
        console.log("No User from firebase...");
        // set current user profile to null
      }
    });
  };

  return { checkUserAuth };
};

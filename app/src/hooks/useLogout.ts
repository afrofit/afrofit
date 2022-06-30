import * as React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { setCurrentUserProfile } from "../../store/reducers/auth/auth.slice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed user out");
        dispatch(setCurrentUserProfile(null));
      })
      .catch((error) => console.error(error.message));
  };

  return { logout };
};

import { auth } from "../../../../config/firebase";
import { signOut } from "firebase/auth";
import * as React from "react";

export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed user out");
      })
      .catch((error) => console.error(error.message));
  };

  return { logout };
};

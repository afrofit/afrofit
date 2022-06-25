import { UserCredentials } from "./../../../src/models/UserCredentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AppThunk } from "./../../store";
import { hideGenericErrorDialog, newRequest } from "../ui/ui.slice";
import { setCurrentUser } from "./auth.slice";

export function LogUserIn(userCredentials: UserCredentials): AppThunk {
  const auth = getAuth();
  const { email, password } = userCredentials;
  return (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("UserCredential", userCredential);
        const user = userCredential.user;
        dispatch(setCurrentUser(user));
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error!", errorCode, errorMessage);
        // ..
      });
  };
}

import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AppThunk } from "./../../store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  setGenericErrorMessage,
  showGenericErrorDialog,
} from "../ui/ui.slice";
import { setCurrentUser } from "./auth.slice";
import { UserModel } from "../../../models/user.model";
import { UserCredentials } from "../../../models/usercredentials.model";

const auth = getAuth();

export function SendPasswordResetEmail(
  userEmail: Omit<UserCredentials, "password">
): AppThunk {
  const { email } = userEmail;
  return (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());
    sendPasswordResetEmail(auth, email)
      .then((userCredential) => {
        console.log("Reset email has been sent!", userCredential);
        dispatch(finishedRequest());
      })
      .catch((error) => {
        dispatch(finishedRequest());
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/user-not-found") {
          dispatch(showGenericErrorDialog(true));
          dispatch(setGenericErrorMessage("Error! User not found."));
          return;
        }

        dispatch(showGenericErrorDialog(true));
        dispatch(setGenericErrorMessage("Error! An unknown error occurred."));
        return;
      });
  };
}

export function LogUserIn(userCredentials: UserCredentials): AppThunk {
  const { email, password } = userCredentials;
  return (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // console.log("UserCredential", userCredential, userCredential.user);
        let loggedInUser: UserModel;
        const join_date = new Date().toUTCString();
        const { user } = userCredential;
        const { email, uid } = user;

        loggedInUser = { ...(email && { email }), id: uid, join_date };
        dispatch(setCurrentUser(loggedInUser));
        dispatch(finishedRequest());
      })
      .catch((error) => {
        dispatch(finishedRequest());
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/user-not-found") {
          dispatch(showGenericErrorDialog(true));
          dispatch(setGenericErrorMessage("Error! User not found."));
          return;
        }
        if (errorCode === "auth/wrong-password") {
          dispatch(showGenericErrorDialog(true));
          dispatch(
            setGenericErrorMessage("Error! Your credentials don't match.")
          );
          return;
        }
        dispatch(showGenericErrorDialog(true));
        dispatch(setGenericErrorMessage("Error! An unknown error occurred."));
        return;
      });
  };
}

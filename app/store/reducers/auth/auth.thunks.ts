import { AppThunk } from "./../../store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  setGenericErrorMessage,
  showGenericErrorDialog,
  triggerActionCompleted,
} from "../ui/ui.slice";
import { setCurrentUser, setCurrentUserProfile } from "./auth.slice";
import { UserModel } from "../../../models/user.model";
import { UserCredentials } from "../../../models/usercredentials.model";
import { auth, db, storage } from "../../../config/firebase";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { UserProfileModel } from "../../../models/userprofile.model";

export function GetUserProfilePhoto(userId: string): AppThunk {
  return (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    const imageRef = ref(storage, `profile_pics/${userId}.png`);

    getDownloadURL(imageRef)
      .then((url) => url)
      .catch((error) => console.error(error));
  };
}

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
        dispatch(triggerActionCompleted(true));
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
      .then((userCredential: any) => {
        // console.log("UserCredential", userCredential);
        // let loggedInUser: UserModel;
        const { user } = userCredential;
        const { email, uid } = user;
        const join_date = new Date().toUTCString();
        const loggedInUser = { ...(email && { email }), id: uid, join_date };
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

export function FetchUserCurrentUserProfle(currentUser: any): AppThunk {
  return (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    const docRef = doc(db, "user-profiles", currentUser.id);

    getDoc(docRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const imageRef = ref(storage, `profile_pics/${currentUser.id}.png`);
          getDownloadURL(imageRef)
            .then((url) => {
              const {
                email,
                join_date,
                name_first,
                name_last,
                user_id,
                username,
              } = docSnapshot.data();

              const userData: UserProfileModel = {
                email,
                join_date,
                name_first,
                name_last,
                user_id,
                username,
                profile_pic: url,
              };

              dispatch(setCurrentUserProfile(userData));
              dispatch(finishedRequest());
            })
            .catch((error) => {
              dispatch(finishedRequest());
              console.error(error);
              dispatch(showGenericErrorDialog(true));
              dispatch(
                setGenericErrorMessage("Error! An unknown error occurred.")
              );
            });
        } else {
          throw new Error("Error fetching your profile!");
        }
      })
      .catch((error) => {
        dispatch(finishedRequest());
        console.error(error);
        dispatch(showGenericErrorDialog(true));
        dispatch(setGenericErrorMessage("Error! An unknown error occurred."));
      });
  };
}

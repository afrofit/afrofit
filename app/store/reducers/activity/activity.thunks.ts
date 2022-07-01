import { isToday } from "date-fns";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  addDoc,
  where,
} from "firebase/firestore";

import { AppThunk } from "./../../store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  setGenericErrorMessage,
  showGenericErrorDialog,
  triggerActionCompleted,
} from "../ui/ui.slice";
import { auth, db, storage } from "../../../config/firebase";

import { TodaysActivityType } from "./types";
import { setTodaysActivity } from "./activity.slice";

export function FetchUserActivityToday(currentUserId: string): AppThunk {
  return async (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    try {
      const q = query(
        collection(db, "todays_activity"),
        where("user_id", "==", currentUserId)
      );

      const todaysActivityArray: TodaysActivityType[] = [];
      const docRef = collection(db, "todays_activity");

      const docSnapshot = await getDocs(q);
      if (docSnapshot) {
        docSnapshot.forEach((doc: any) => {
          todaysActivityArray.push({ ...doc.data(), id: doc.id });
        });

        if (todaysActivityArray.length < 1) {
          const newActivity = {
            body_movements: 0,
            calories_burned: 0,
            local_date: Date.now(),
            user_id: currentUserId,
          };
          // Let's create an activity here and then send that up
          await addDoc(docRef, newActivity);

          dispatch(setTodaysActivity({ ...newActivity, id: "" }));
          return dispatch(finishedRequest());
        }

        const latestActivity = todaysActivityArray.sort((a, b) =>
          a.local_date < b.local_date ? 1 : -1
        )[0];

        if (isToday(latestActivity.local_date)) {
          dispatch(setTodaysActivity(latestActivity));
          return dispatch(finishedRequest());
        } else {
          // Let's create an activity here and then send that up
          await addDoc(docRef, {
            body_movements: 0,
            calories_burned: 0,
            local_date: Date.now(),
            user_id: currentUserId,
          });
          return dispatch(finishedRequest());
        }
      }
    } catch (error) {
      dispatch(finishedRequest());
      console.error(error);
      dispatch(showGenericErrorDialog(true));
      dispatch(setGenericErrorMessage("Error! An unknown error occurred."));
    }
  };
}

export function SaveUserActivityToday(): AppThunk {
  return (dispatch) => {
    //save user activity here
  };
}

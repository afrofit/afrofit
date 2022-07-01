import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  addDoc,
  where,
  getDoc,
} from "firebase/firestore";
import { AppThunk } from "../../../store/store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  setGenericErrorMessage,
  showGenericErrorDialog,
} from "../ui/ui.slice";
import { auth, db, storage } from "../../../config/firebase";
import { setCurrentStory } from "./story.slice";
import { ChapterType, StoryType } from "../../../utils/types";

export function FetchUserStoryActivity(
  storyId: string,
  currentUserId: string
): AppThunk {
  return (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    const docRef = doc(db, "stories", storyId);

    getDoc(docRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const currentStory = docSnapshot.data();

          const chaptersArray: ChapterType[] = [];
          const playedChaptersArray: any[] = [];

          const storiesQuery = query(
            collection(db, "stories"),
            where("story_id", "==", storyId)
          );

          const playedChaptersQuery = query(
            collection(db, "stories"),
            where("story_id", "==", storyId)
          );

          let userSteps: number = 0;

          getDocs(playedChaptersQuery)
            .then((docSnapshot) => {
              if (docSnapshot) {
                docSnapshot.forEach((doc: any) => {
                  console.log({ ...doc.data(), id: doc.id });
                  playedChaptersArray.push({ ...doc.data(), id: doc.id });
                });

                userSteps = chaptersArray
                  .map((chapter) => chapter.target_steps)
                  .reduce((previous, current) => {
                    return previous + current;
                  });
              } else {
                userSteps = 0;
              }
            })
            .catch((error) => {
              console.error(error);
            });

          getDocs(storiesQuery)
            .then((docSnapshot) => {
              if (docSnapshot) {
                docSnapshot.forEach((doc: any) => {
                  console.log({ ...doc.data(), id: doc.id });
                  chaptersArray.push({ ...doc.data(), id: doc.id });
                });

                const totalTargetSteps: number = chaptersArray
                  .map((chapter) => chapter.target_steps)
                  .reduce((previous, current) => {
                    return previous + current;
                  });

                dispatch(
                  setCurrentStory({
                    ...currentStory,
                    id: currentStory.story_id,
                    totalTargetSteps,
                    userSteps,
                  })
                );
              }

              return dispatch(finishedRequest());
            })
            .catch((error) => {
              return dispatch(finishedRequest());
            });
          // get all chapters and accumulate the target_steps
          // get all played chapters and accumulate user_steps
          // calc time left off of this
        }
      })
      .catch((error) => {
        dispatch(finishedRequest());
        console.error(error);
        dispatch(showGenericErrorDialog(true));
        dispatch(
          setGenericErrorMessage("There was an error fetching current story.")
        );
      });
  };
}

export function FetchStoryChapters(
  storyId: string,
  currentUserId: string
): AppThunk {
  return (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    try {
      const q = query(
        collection(db, "stories"),
        where("story_id", "==", storyId)
      );
    } catch (error) {
      dispatch(finishedRequest());
      console.error(error);
      dispatch(showGenericErrorDialog(true));
      dispatch(
        setGenericErrorMessage("There was an error fetching current story.")
      );
    }
  };
}

export function FetchUserChapterActivity(currentUserId: string): AppThunk {
  return (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    try {
      const q = query(
        collection(db, "todays_activity"),
        where("user_id", "==", currentUserId)
      );
    } catch (error) {
      dispatch(finishedRequest());
      console.error(error);
      dispatch(showGenericErrorDialog(true));
      dispatch(
        setGenericErrorMessage("There was an error fetching current story.")
      );
    }
  };
}

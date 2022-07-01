import {
  PlayedChapterRawType,
  PlayedChapterType,
} from "./../../../utils/types";
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
import {
  setCurrentChapters,
  setCurrentStory,
  unSetCurrentChapters,
} from "./story.slice";
import { ChapterType, PlayedStoryType, StoryType } from "../../../utils/types";

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
          const currentStory = { ...docSnapshot.data() };

          const chaptersArray: ChapterType[] = [];
          const playedChaptersArray: any[] = [];

          const chaptersQuery = query(
            collection(db, "chapters"),
            where("story_id", "==", storyId)
          );

          const playedChaptersQuery = query(
            collection(db, "played_chapter"),
            where("story_id", "==", storyId),
            where("user_id", "==", currentUserId)
          );

          let userSteps: number = 0;

          getDocs(playedChaptersQuery)
            .then((docSnapshot) => {
              if (docSnapshot) {
                docSnapshot.forEach((doc: any) => {
                  playedChaptersArray.push({ ...doc.data(), id: doc.id });
                });

                if (playedChaptersArray.length) {
                  userSteps = playedChaptersArray
                    .map((chapter) => chapter.user_steps)
                    .reduce((previous, current) => {
                      return previous + current;
                    });
                }
              } else {
                userSteps = 0;
              }
            })
            .catch((error) => {
              console.error(error);
            });

          getDocs(chaptersQuery)
            .then((docSnapshot) => {
              if (docSnapshot) {
                docSnapshot.forEach((doc: any) => {
                  chaptersArray.push({ ...doc.data(), id: doc.id });
                });

                const totalTargetSteps = chaptersArray
                  .map((chapter) => {
                    return chapter.target_steps;
                  })
                  .reduce((previous, current) => {
                    return previous + current;
                  });

                const finalCurrentStoryData: any = {
                  ...currentStory,
                  id: currentStory.story_id,
                  totalTargetSteps,
                  userSteps,
                };

                dispatch(setCurrentStory(finalCurrentStoryData));
              }

              return dispatch(finishedRequest());
            })
            .catch((error) => {
              return dispatch(finishedRequest());
            });
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
      const chapterQuery = query(
        collection(db, "chapters"),
        where("story_id", "==", storyId)
      );

      const playedChaptersQuery = query(
        collection(db, "played_chapter"),
        where("story_id", "==", storyId),
        where("user_id", "==", currentUserId)
      );

      const chaptersArray: PlayedChapterType[] = [];
      const playedChaptersArray: PlayedChapterRawType[] = [];

      getDocs(playedChaptersQuery)
        .then((docSnapshot) => {
          if (docSnapshot) {
            docSnapshot.forEach((doc: any) => {
              playedChaptersArray.push({ ...doc.data(), id: doc.id });
            });
          }
        })
        .catch((error) => {
          console.error(error);
          dispatch(showGenericErrorDialog(true));
          dispatch(
            setGenericErrorMessage(
              "There was an error fetching story chapters."
            )
          );
        });

      getDocs(chapterQuery)
        .then((docSnapshot) => {
          if (docSnapshot) {
            docSnapshot.forEach((doc: any) => {
              chaptersArray.push({ ...doc.data(), id: doc.id });
            });

            let newChaptersArray: any[];

            if (playedChaptersArray.length) {
              // Here, let's check
              newChaptersArray = chaptersArray.map((chapter) => {
                for (const [index, item] of playedChaptersArray.entries()) {
                  if (playedChaptersArray[index]["chapter_id"] === chapter.id) {
                    return {
                      ...chapter,
                      user_steps: item.user_steps,
                      user_time: item.user_time,
                    };
                  }

                  return { ...chapter };
                }
              });
            } else {
              newChaptersArray = chaptersArray;
            }

            dispatch(
              setCurrentChapters(
                newChaptersArray.sort((a, b) => (a.order > b.order ? 1 : -1))
              )
            );
            dispatch(finishedRequest());
          } else {
            dispatch(unSetCurrentChapters());
          }
        })
        .catch((error) => {
          console.error(error);
          dispatch(showGenericErrorDialog(true));
          dispatch(
            setGenericErrorMessage(
              "There was an error fetching story chapters."
            )
          );
        });
    } catch (error) {
      dispatch(finishedRequest());
      console.error(error);
      dispatch(showGenericErrorDialog(true));
      dispatch(
        setGenericErrorMessage("There was an error fetching story chapters.")
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

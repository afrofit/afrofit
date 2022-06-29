import { Screen } from "../../../../src/components/screen/Screen";
import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import * as React from "react";
import { useCollection } from "../../../../src/hooks/useCollection";

import { Header } from "./components/Header";
import { Section } from "../../../../src/components/section/Section";

import { ActivityTodayList } from "./components/ActivityTodayList";
import Spacer from "../../../../src/components/elements/Spacer";
import { StoryList } from "./components/StoryList";
import { useDocument } from "../../../../src/hooks/useDocument";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentUserProfile,
  setCurrentUserProfile,
} from "../../../../store/reducers/auth/auth.slice";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../../../../config/firebase";
import { useDispatch } from "react-redux";
import { UserProfileModel } from "app/models/userprofile.model";
import { getDownloadURL, ref } from "firebase/storage";
import { FetchUserCurrentUserProfle } from "../../../../store/reducers/auth/auth.thunks";

export const HomeScreen = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentUserProfile = useSelector(selectCurrentUserProfile);
  const dispatch = useDispatch();

  const [error, setError] = React.useState<string | null>(null);

  const { documents: stories } = useCollection("stories");

  React.useEffect(() => {
    currentUser &&
      currentUser.id &&
      dispatch(FetchUserCurrentUserProfle(currentUser));
  }, [currentUser]);

  React.useEffect(() => {
    console.log("currentUserProfile", currentUserProfile);
  }, [currentUserProfile]);

  return (
    <>
      <SolidBackground />
      <Screen>
        <Header
          username={currentUserProfile?.username || "Fetching username..."}
          imageUrl={currentUserProfile?.profile_pic}
        />
        <Spacer h={10} />
        <Section title="Your activity today">
          <ActivityTodayList />
        </Section>
        <Section title="Your stories">
          <StoryList />
        </Section>
      </Screen>
    </>
  );
};

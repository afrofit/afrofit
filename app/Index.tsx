import * as React from "react";
import type {} from "redux-thunk/extend-redux";
import { LogBox } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { GenericError } from "./src/components/errors/GenericError";
import { LoaderAbsolute } from "./src/components/loaders/LoaderAbsolute";
import GameNavigator from "./src/navigator/AppNavigator";
import AuthNavigator from "./src/navigator/AuthNavigator";

import DEVICE_STORAGE from "./api/device-storage";
import {
  hideGenericErrorDialog,
  selectGenericErrorMessage,
  selectLoaderMessage,
  selectUiIsLoading,
} from "./store/reducers/ui/ui.slice";

import { selectModalVisible, setCurrentUser, setModalVisible } from "./store/reducers/auth/auth.slice";
import { selectUser } from "./store/reducers/auth/auth.slice";
import { UserModel } from "./types/UserModel";
import { CheckSubscriptionStatus } from "./store/reducers/auth/thunks/check-subscription.thunk";
import { LogOut } from "./store/reducers/auth/thunks/logout.thunk";
import { AlertModal } from "./src/components/modals/AlertModal";

LogBox.ignoreAllLogs(true);

export const Index = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectGenericErrorMessage);
  const loaderMessage = useSelector(selectLoaderMessage);
  const showLoader = useSelector(selectUiIsLoading);
  const currentUser = useSelector(selectUser);
  const modalVisible = useSelector(selectModalVisible)

  const checkAuth = React.useCallback(() => {
    DEVICE_STORAGE.GET_STORED_USER().then((result: UserModel | null) => {
      console.log("user?: ", result);
      if (result) return dispatch(setCurrentUser(result));
    });
  }, []);

  React.useEffect(() => {
    checkAuth();
  }, []);

  React.useEffect(() => {
    if (currentUser) {
      checkSubscriptionStatus();
    }
  }, [currentUser]);

  const modalDismiss = () => {
    dispatch(setModalVisible(false));
  }

  const checkSubscriptionStatus = React.useCallback(() => {
    if (currentUser) {
      dispatch(CheckSubscriptionStatus(currentUser.userId));
    }
  }, [currentUser]);

  const handleHideError = () => {
    return dispatch(hideGenericErrorDialog());
  };

  return (
    <>
       <AlertModal
        visible={modalVisible}
        body="You need an active subscription to the Afrofit club to use this app!"
        title="Oops!"
        dismissText="Continue"
        onDismiss={() =>modalDismiss()}
      />
      <GenericError
        visible={Boolean(error)}
        message={error}
        onDismissWarning={handleHideError}
      />
      <LoaderAbsolute message={loaderMessage} visible={showLoader} />

      {currentUser ? <GameNavigator /> : <AuthNavigator />}
    </>
  );
};

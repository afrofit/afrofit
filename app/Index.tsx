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

import { setCurrentUser } from "./store/reducers/auth/auth.slice";
import { selectUser } from "./store/reducers/auth/auth.slice";
import { UserModel } from "./types/UserModel";
import { CheckSubscriptionStatus } from "./store/reducers/auth/thunks/check-subscription.thunk";

LogBox.ignoreAllLogs(true);

export const Index = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectGenericErrorMessage);
  const loaderMessage = useSelector(selectLoaderMessage);
  const showLoader = useSelector(selectUiIsLoading);
  const currentUser = useSelector(selectUser);

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

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
  selectShowGenericErrorDialog,
  selectUiIsLoading,
} from "./store/reducers/ui/ui.slice";

import { setCurrentUser } from "./store/reducers/auth/auth.slice";
import { selectUser } from "./store/reducers/auth/auth.slice";
import { UserModel } from "./types/UserModel";

LogBox.ignoreAllLogs(true);

export const Index = () => {
  const dispatch = useDispatch();

  const errorMessage = useSelector(selectGenericErrorMessage);
  const showError = useSelector(selectShowGenericErrorDialog);
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

  const handleHideError = () => {
    return dispatch(hideGenericErrorDialog());
  };

  return (
    <>
      <GenericError
        visible={!!showError}
        message={errorMessage}
        onDismissWarning={handleHideError}
      />
      <LoaderAbsolute message={loaderMessage} visible={showLoader} />

      {currentUser ? <GameNavigator /> : <AuthNavigator />}
    </>
  );
};

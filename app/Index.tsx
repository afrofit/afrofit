import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GenericError } from "./src/components/errors/GenericError";
import { LoaderAbsolute } from "./src/components/loaders/LoaderAbsolute";
import GameNavigator from "./src/navigator/AppNavigator";
import AuthNavigator from "./src/navigator/AuthNavigator";
import { selectCurrentUser } from "./store/reducers/auth/auth.slice";

import {
  hideGenericErrorDialog,
  selectGenericErrorMessage,
  selectLoaderMessage,
  selectShowGenericErrorDialog,
  selectUiIsLoading,
  setGenericErrorMessage,
} from "./store/reducers/ui/ui.slice";

export const Index = () => {
  const dispatch = useDispatch();

  const errorMessage = useSelector(selectGenericErrorMessage);
  const showError = useSelector(selectShowGenericErrorDialog);
  const currentUser = useSelector(selectCurrentUser);
  const loaderMessage = useSelector(selectLoaderMessage);
  const showLoader = useSelector(selectUiIsLoading);

  React.useEffect(() => {
    console.log("CurrentUser", currentUser);
  }, [currentUser]);

  const handleHideError = () => {
    dispatch(hideGenericErrorDialog());
    return dispatch(setGenericErrorMessage(""));
  };

  return (
    <>
      {/* <GameNavigator /> */}
      <GenericError
        visible={showError}
        message={errorMessage}
        onDismissWarning={handleHideError}
      />
      <LoaderAbsolute message={loaderMessage} visible={showLoader} />

      <AuthNavigator />
    </>
  );
};

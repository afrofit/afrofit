import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GenericError } from "./src/components/errors/GenericError";
import { LoaderAbsolute } from "./src/components/loaders/LoaderAbsolute";
import { useAuth } from "./src/hooks/useAuth";
import GameNavigator from "./src/navigator/AppNavigator";
import AuthNavigator from "./src/navigator/AuthNavigator";
import { selectCurrentUserProfile } from "./store/reducers/auth/auth.slice";

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
  const { checkUserAuth } = useAuth();

  const errorMessage = useSelector(selectGenericErrorMessage);
  const showError = useSelector(selectShowGenericErrorDialog);
  const currentUserProfile = useSelector(selectCurrentUserProfile);
  const loaderMessage = useSelector(selectLoaderMessage);
  const showLoader = useSelector(selectUiIsLoading);

  React.useEffect(() => {
    checkUserAuth();
  }, []);

  const handleHideError = () => {
    dispatch(hideGenericErrorDialog());
    return dispatch(setGenericErrorMessage(""));
  };

  return (
    <>
      <GenericError
        visible={showError}
        message={errorMessage}
        onDismissWarning={handleHideError}
      />
      <LoaderAbsolute message={loaderMessage} visible={showLoader} />

      {currentUserProfile ? <GameNavigator /> : <AuthNavigator />}
    </>
  );
};

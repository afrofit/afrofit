import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GenericError } from "./src/components/errors/GenericError";
import GameNavigator from "./src/navigator/AppNavigator";
import AuthNavigator from "./src/navigator/AuthNavigator";

import {
  hideGenericErrorDialog,
  selectGenericErrorMessage,
  selectShowGenericErrorDialog,
  setGenericErrorMessage,
} from "./store/reducers/ui/ui.slice";

export const Index = () => {
  const dispatch = useDispatch();

  const errorMessage = useSelector(selectGenericErrorMessage);
  const showError = useSelector(selectShowGenericErrorDialog);

  const handleHideError = () => {
    dispatch(hideGenericErrorDialog());
    return dispatch(setGenericErrorMessage(""));
  };

  React.useEffect(() => {
    console.log("errorMessage", errorMessage, "showError", showError);
  }, [errorMessage, showError]);

  return (
    <>
      {/* <GameNavigator /> */}
      <GenericError
        visible={showError}
        message={errorMessage}
        onDismissWarning={handleHideError}
      />
      <AuthNavigator />
    </>
  );
};

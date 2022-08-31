import { AppThunk } from "../../../../store/store";
import DEVICE_STORAGE from "../../../../../app/api/device-storage";
import {
  hideGenericErrorDialog,
  setGenericErrorMessage,
} from "../../ui/ui.slice";
import { logout } from "../auth.slice";

export function LogOut(): AppThunk {
  return (dispatch) => {
    dispatch(hideGenericErrorDialog());

    DEVICE_STORAGE.REMOVE_TOKEN()
      .catch((error) => {
        dispatch(setGenericErrorMessage(error.message));
        console.error(error);
      })
      .then(() => {
        DEVICE_STORAGE.REMOVE_RESET_TOKEN;
      })
      .then(() => {
        dispatch(logout());
      });
  };
}

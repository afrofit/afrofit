import * as React from "react";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const useAuth = () => {
  const [user, setUser] = React.useState<any>();

  React.useEffect(() => {
    const unsubFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        unsubFromAuthStateChanged();
      } else {
        setUser(undefined);
      }
    });
  }, []);

  return { user };
};

import { auth } from "../../../../config/firebase";
import { signOut } from "firebase/auth";
import * as React from "react";

export const useLogout = () => {
  const [error, setError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isCancelled, setIsCancelled] = React.useState(false);

  const logout = async () => {
    setError(false);
    setIsLoading(true);

    try {
      await signOut(auth);
      if (!isCancelled) {
        setIsLoading(false);
        setError(false);
      }
    } catch (error) {
      if (!isCancelled) {
        console.error(error);
        setError(true);
        setIsLoading(false);
      }
    }
  };

  React.useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, isLoading, error, isCancelled };
};

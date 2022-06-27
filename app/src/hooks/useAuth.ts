// import * as React from "react";
// import { getAuth, onAuthStateChanged, User } from "firebase/auth";

// const auth = getAuth();

// export const useAuth = () => {
//   const [user, setUser] = React.useState<User>();

//   React.useEffect(() => {
//     const unsubFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(undefined);
//       }
//     });

//     return unsubFromAuthStateChanged;
//   }, []);

//   return { user };
// };

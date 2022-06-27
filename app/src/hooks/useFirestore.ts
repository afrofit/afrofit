// import * as React from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../config/firebase";

// export const useFirestore = (collectionName: string) => {
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [data, setData] = React.useState<any[]>([]);
//   const [isCancelled, setIsCancelled] = React.useState(false);
//   const [error, setError] = React.useState<any>(null);

//   React.useEffect(() => {
//     const dataRef = collection(db, collectionName);
//     setIsLoading(true);
//     getDocs(dataRef)
//       .then((snapshot) => {
//         let results: any[] = [];
//         snapshot.docs.forEach((doc) => {
//           results.push({ id: doc.id, ...doc.data() });
//         });
//         setData(results);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setError(error);
//       });
//   }, []);

//   React.useEffect(() => {
//     return () => setIsCancelled(true);
//   }, []);

//   return { isLoading, data, isCancelled, error };
// };

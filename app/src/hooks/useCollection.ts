import * as React from "react";
import { db } from "../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (c: string) => {
  const [documents, setDocuments] = React.useState<any[] | null>(null);

  React.useEffect(() => {
    let ref = collection(db, c);

    const unsub = onSnapshot(ref, (snapshot) => {
      let results: any[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, []);

  return { documents };
};

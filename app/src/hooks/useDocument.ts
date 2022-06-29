import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import React from "react";

export const useDocument = (collectionName: string, documentId: string) => {
  const [error, setError] = React.useState<string | null>(null);
  const [document, setDocument] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchDocument = () => {
    setIsLoading(true);
    const docRef = doc(db, collectionName, documentId);
    getDoc(docRef).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        console.log("Document data:", docSnapshot.data());
        setDocument(docSnapshot.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        setError("No such document!");
      }
    });
    setIsLoading(false);
  };

  return { error, document, isLoading, fetchDocument };
};

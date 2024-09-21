import { useState, useEffect, useCallback } from "react";
import { db } from "@/firebaseConfig";
import { useUser } from "./userContext";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

interface UniversityRecommendation {
  userId: string;
  subjects?: string[];
  detailedSubjects?: string[];
  idealArea?: string;
  idealCountries?: string[];
  cultureImportance?: number;
  supportServices?: string[];
}

export const useUniversityRecommendations = () => {
  const { username } = useUser();
  const [recommendations, setRecommendations] =
    useState<UniversityRecommendation | null>(null);

  const fetchUniversityRecommendations = useCallback(async () => {
    const recRef = query(
      collection(db, "rec_universities"),
      where("userId", "==", username),
    );
    const snapshot = await getDocs(recRef);

    if (!snapshot.empty) {
      const recData = snapshot.docs[0].data() as UniversityRecommendation;
      setRecommendations(recData);
    } else {
      const newRecommendation: UniversityRecommendation = {
        userId: username,
        subjects: [],
        detailedSubjects: [],
        idealArea: "",
        idealCountries: [],
        cultureImportance: 0,
        supportServices: [],
      };
      setRecommendations(newRecommendation);
    }
  }, [username]);

  const updateUniversityRecommendations = async (
    newData: Partial<UniversityRecommendation>,
  ) => {
    const recRef = query(
      collection(db, "rec_universities"),
      where("userId", "==", username),
    );
    const snapshot = await getDocs(recRef);

    let updatedData: UniversityRecommendation;

    if (!snapshot.empty) {
      const docId = snapshot.docs[0].id;
      updatedData = {
        ...(snapshot.docs[0].data() as UniversityRecommendation),
        ...newData,
        userId: username,
      };
      await setDoc(doc(db, "rec_universities", docId), updatedData);
    } else {
      updatedData = {
        userId: username,
        subjects: [],
        detailedSubjects: [],
        idealArea: "",
        idealCountries: [],
        cultureImportance: 0,
        supportServices: [],
        ...newData,
      } as UniversityRecommendation;
      await setDoc(doc(collection(db, "rec_universities")), updatedData);
    }

    setRecommendations(updatedData);
    return updatedData; // Return the updated data
  };

  useEffect(() => {
    fetchUniversityRecommendations();
  }, [fetchUniversityRecommendations]);

  return {
    recommendations,
    updateUniversityRecommendations,
  };
};

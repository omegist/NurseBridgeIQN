"use client"

import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "./AuthContext";

interface TestContextType {
  testData: any | null;
  setTestData: React.Dispatch<React.SetStateAction<any | null>>;
  loading: boolean;
  error: string | null;
  fetchTestData: (testId: string) => Promise<void>;
  saveTestData: (testId: string, data: any) => Promise<void>;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export function TestProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [testData, setTestData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTestData = useCallback(async (testId: string) => {
    if (!user) {
      setError("User not authenticated");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const testDocRef = doc(db, "users", user.uid, "tests", testId);
      const testDocSnap = await getDoc(testDocRef);

      if (testDocSnap.exists()) {
        setTestData(testDocSnap.data());
      } else {
        setTestData(null);
        setError("Test data not found");
      }
    } catch (err) {
      console.error("Error fetching test data:", err);
      setError("Failed to fetch test data. Check Firestore rules.");
      setTestData(null);
    } finally {
      setLoading(false);
    }
  }, [user]);

  const saveTestData = useCallback(async (testId: string, data: any) => {
    if (!user) {
      setError("User not authenticated");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const testDocRef = doc(db, "users", user.uid, "tests", testId);
      await setDoc(testDocRef, data, { merge: true });
      setTestData(data);
    } catch (err) {
      console.error("Error saving test data:", err);
      setError("Failed to save test data. Check Firestore rules.");
    } finally {
      setLoading(false);
    }
  }, [user]);

  return (
    <TestContext.Provider
      value={{
        testData,
        setTestData,
        loading,
        error,
        fetchTestData,
        saveTestData,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

export function useTest() {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error("useTest must be used within a TestProvider");
  }
  return context;
}

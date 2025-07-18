
"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react"
import { useRouter } from "next/navigation"
import { initializeFirebase, getFirebase } from "@/lib/firebase"
import { 
  onAuthStateChanged, 
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  User as FirebaseUser,
  Auth
} from "firebase/auth"
import { getStorage, ref, uploadBytes, getDownloadURL, FirebaseStorage } from "firebase/storage";
import { doc, setDoc, getDoc, updateDoc, serverTimestamp, increment, Firestore } from "firebase/firestore"
import { useToast } from "@/hooks/use-toast"
import { FirebaseWarning } from "@/components/shared/FirebaseWarning"

interface User {
  uid: string;
  name: string | null;
  email: string | null;
  score: number;
  avatar: string | null;
  createdAt: Date | null;
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, pass: string) => Promise<void>;
  signup: (email: string, pass: string, username: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserScore: (points: number) => Promise<void>;
  updateUserAvatar: (file: File) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const getAuthErrorMessage = (error: any): string => {
  switch (error.code) {
    case 'auth/invalid-api-key':
    case 'auth/api-key-not-valid':
        return 'The Firebase API Key is not valid. Please check your .env file configuration.';
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Invalid email or password. Please check your credentials and try again.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/user-disabled':
      return 'This user account has been disabled.';
    case 'auth/email-already-in-use':
      return 'An account already exists with this email address.';
    case 'auth/weak-password':
      return 'The password is too weak. Please use at least 6 characters.';
    case 'auth/requires-recent-login':
      return 'This action is sensitive and requires recent authentication. Please log in again.';
    case 'auth/provider-already-linked':
      return 'This account is already linked with another provider.';
    case 'auth/cancelled-popup-request':
    case 'auth/popup-closed-by-user':
      return ''; // User closed the popup, don't show an error
    case 'auth/unauthorized-domain':
        return 'This domain is not authorized for OAuth operations. Please enable it in your Firebase console.';
    case 'auth/operation-not-allowed':
    case 'auth/configuration-not-found':
        return 'Firebase project configuration is incomplete. Please go to your Firebase Console and ensure you have enabled the required Sign-in providers (Email/Password, Google, etc.).';
    default:
      console.error('Unhandled Auth Error:', error);
      return 'An unexpected error occurred. Please try again.';
  }
};


export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const [authConfigError, setAuthConfigError] = useState<string | null>(null);
  const router = useRouter()
  const { toast } = useToast()

  const isInvalidApiKey = useCallback(() => {
    const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
    return !apiKey || apiKey === 'YOUR_API_KEY_HERE' || apiKey === 'undefined';
  }, []);

  useEffect(() => {
    if (isInvalidApiKey()) {
        setAuthConfigError('The Firebase API Key is missing or invalid. Please update your .env file.');
        setLoading(false);
        return;
    }
    
    try {
        initializeFirebase();
        setFirebaseInitialized(true);
    } catch (error: any) {
        setAuthConfigError('Failed to initialize Firebase. Please check your configuration.');
        setLoading(false);
    }
  }, [isInvalidApiKey]);

  const handleUser = useCallback(async (firebaseUser: FirebaseUser | null) => {
    const { db } = getFirebase();
    try {
      if (firebaseUser) {
        const userRef = doc(db, "users", firebaseUser.uid);
        let userDoc;
        try {
            userDoc = await getDoc(userRef);
        } catch (error) {
            console.error(`[AuthContext] Firestore Error: Failed to get user document for uid: ${firebaseUser.uid}. Check Firestore rules for 'users' collection read access.`, error);
            setUser(null);
            return; 
        }

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser({
            uid: firebaseUser.uid,
            name: userData.name,
            email: firebaseUser.email,
            score: userData.score || 0,
            avatar: userData.avatar || firebaseUser.photoURL,
            createdAt: userData.createdAt?.toDate() || null,
          });
        } else {
          const newName = firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'New User';
          const newUser: User = {
            uid: firebaseUser.uid,
            name: newName,
            email: firebaseUser.email,
            score: 0,
            avatar: firebaseUser.photoURL,
            createdAt: new Date(),
          };
          try {
            await setDoc(userRef, { 
              name: newUser.name,
              email: newUser.email,
              score: 0,
              avatar: newUser.avatar,
              createdAt: serverTimestamp(),
            });
            setUser(newUser);
          } catch(error) {
             console.error(`[AuthContext] Firestore Error: Failed to create user document for uid: ${firebaseUser.uid}. Check Firestore rules for 'users' collection write access.`, error);
             setUser(null);
          }
        }
      } else {
        setUser(null);
      }
    } catch (error: any) {
      if (error.code === 'unavailable' || (error.message && error.message.includes('offline'))) {
        toast({
          variant: 'destructive',
          title: 'Database Connection Failed',
          description: 'Could not connect to Firestore. Please go to your Firebase Console, select "Firestore Database", and ensure it has been created and is active.',
        });
      } else {
        console.error("Error handling user state:", error);
      }
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [toast]);
  
  useEffect(() => {
    if (!firebaseInitialized) return;

    const { auth } = getFirebase();
    const unsubscribe = onAuthStateChanged(auth, handleUser, (error: any) => {
      const message = getAuthErrorMessage(error);
      if (message.includes('API key') || message.includes('configuration')) {
        setAuthConfigError(message);
      } else {
        console.error("Firebase auth state error:", error);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [firebaseInitialized, handleUser]);

  const login = async (email: string, pass: string) => {
    if (!firebaseInitialized) {
        toast({ variant: 'destructive', title: 'Login failed', description: authConfigError });
        return;
    }
    const { auth } = getFirebase();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (error: any) {
      const message = getAuthErrorMessage(error);
      if (message) {
        toast({ variant: 'destructive', title: 'Login failed', description: message });
      }
    }
  }

  const signup = async (email: string, pass: string, username: string) => {
    if (!firebaseInitialized) {
        toast({ variant: 'destructive', title: 'Sign up failed', description: authConfigError });
        return;
    }
    const { auth } = getFirebase();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(userCredential.user, { displayName: username });
    } catch (error: any) {
      const message = getAuthErrorMessage(error);
      if (message) {
        toast({ variant: 'destructive', title: 'Sign up failed', description: message });
      }
    }
  }

  const logout = async () => {
    if (!firebaseInitialized) return;
    const { auth } = getFirebase();
    await signOut(auth);
    router.push("/auth");
  }

  const updateUserScore = async (points: number) => {
    if (user && firebaseInitialized) {
      const { db } = getFirebase();
      const userRef = doc(db, "users", user.uid);
      try {
        await updateDoc(userRef, { score: increment(points) });
        setUser(prev => prev ? { ...prev, score: prev.score + points } : null);
      } catch (error) {
         console.error(`[AuthContext] Firestore Error: Failed to update user score. Check rules for 'users' collection write access.`, error);
         toast({ variant: "destructive", title: "Error", description: "Could not update your score." });
      }
    }
  }

  const updateUserAvatar = async (file: File) => {
    if (!user || !firebaseInitialized) return;
    
    const { auth, storage, db } = getFirebase();
    if (!auth.currentUser) return;

    try {
        const storageRef = ref(storage, `avatars/${user.uid}/${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);

        await updateProfile(auth.currentUser, { photoURL: downloadURL });

        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, { avatar: downloadURL });

        setUser(prevUser => prevUser ? { ...prevUser, avatar: downloadURL } : null);

        toast({
            title: "Success!",
            description: "Your profile photo has been updated.",
        });

    } catch (error: any) {
        console.error("[AuthContext] Error updating avatar:", error);
        let description = "There was an error updating your profile photo. Please try again.";
        if (error.code === 'storage/unauthorized') {
            description = "Permission denied. Please update your Firebase Storage security rules to allow uploads and try again.";
        } else if (error.code === 'permission-denied') {
             description = "Permission denied. Please check your Firestore security rules for write access to your user document.";
        }
        toast({
            variant: "destructive",
            title: "Upload Failed",
            description: description,
        });
    }
  };
  
  if (authConfigError) {
    return <FirebaseWarning isApiKeyInvalid={isInvalidApiKey()} authConfigError={authConfigError} />;
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, updateUserScore, updateUserAvatar }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

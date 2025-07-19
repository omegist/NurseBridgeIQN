"use client"

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react"
import { useRouter } from "next/navigation"
import { auth, db, storage } from "@/lib/firebase"
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  User as FirebaseUser,
} from "firebase/auth"
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
  increment,
} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { useToast } from "@/hooks/use-toast"
import { FirebaseWarning } from "@/components/shared/FirebaseWarning"

interface User {
  uid: string
  name: string | null
  email: string | null
  score: number
  avatar: string | null
  createdAt: Date | null
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, pass: string) => Promise<void>
  signup: (email: string, pass: string, username: string) => Promise<void>
  logout: () => Promise<void>
  updateUserScore: (points: number) => Promise<void>
  updateUserAvatar: (file: File) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const getAuthErrorMessage = (error: any): string => {
  switch (error.code) {
    case "auth/invalid-api-key":
    case "auth/api-key-not-valid":
      return "The Firebase API Key is not valid. Please check your .env file configuration."
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "Invalid email or password. Please check your credentials and try again."
    case "auth/invalid-email":
      return "Please enter a valid email address."
    case "auth/user-disabled":
      return "This user account has been disabled."
    case "auth/email-already-in-use":
      return "An account already exists with this email address."
    case "auth/weak-password":
      return "The password is too weak. Please use at least 6 characters."
    case "auth/requires-recent-login":
      return "This action is sensitive and requires recent authentication. Please log in again."
    case "auth/provider-already-linked":
      return "This account is already linked with another provider."
    case "auth/unauthorized-domain":
      return "This domain is not authorized for OAuth operations. Please enable it in your Firebase console."
    case "auth/operation-not-allowed":
    case "auth/configuration-not-found":
      return "Firebase project configuration is incomplete. Ensure you have enabled the required Sign-in providers (Email/Password, Google, etc.) in your Firebase Console."
    default:
      console.error("Unhandled Auth Error:", error)
      return "An unexpected error occurred. Please try again."
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [authConfigError, setAuthConfigError] = useState<string | null>(null)
  const router = useRouter()
  const { toast } = useToast()

  const isInvalidApiKey = useCallback(() => {
    const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
    return !apiKey || apiKey === "YOUR_API_KEY_HERE" || apiKey === "undefined"
  }, [])

  const handleUser = useCallback(
    async (firebaseUser: FirebaseUser | null) => {
      try {
        if (firebaseUser) {
          const userRef = doc(db, "users", firebaseUser.uid)
          const userDoc = await getDoc(userRef)

          if (userDoc.exists()) {
            const userData = userDoc.data()
            setUser({
              uid: firebaseUser.uid,
              name: userData.name,
              email: firebaseUser.email,
              score: userData.score || 0,
              avatar: userData.avatar || firebaseUser.photoURL,
              createdAt: userData.createdAt?.toDate() || null,
            })
          } else {
            const newUser: User = {
              uid: firebaseUser.uid,
              name:
                firebaseUser.displayName ||
                firebaseUser.email?.split("@")[0] ||
                "New User",
              email: firebaseUser.email,
              score: 0,
              avatar: firebaseUser.photoURL,
              createdAt: new Date(),
            }

            await setDoc(userRef, {
              name: newUser.name,
              email: newUser.email,
              score: 0,
              avatar: newUser.avatar,
              createdAt: serverTimestamp(),
            })

            setUser(newUser)
          }
        } else {
          setUser(null)
        }
      } catch (error: any) {
        if (
          error.code === "unavailable" ||
          (error.message && error.message.includes("offline"))
        ) {
          toast({
            variant: "destructive",
            title: "Database Connection Failed",
            description:
              "Could not connect to Firestore. Ensure Firestore is created and active in your Firebase Console.",
          })
        } else {
          console.error("Error handling user state:", error)
        }
        setUser(null)
      } finally {
        setLoading(false)
      }
    },
    [toast]
  )

  useEffect(() => {
    if (isInvalidApiKey()) {
      setAuthConfigError(
        "The Firebase API Key is missing or invalid. Please update your .env file."
      )
      setLoading(false)
      return
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      handleUser,
      (error: any) => {
        const message = getAuthErrorMessage(error)
        if (
          message.includes("API key") ||
          message.includes("configuration")
        ) {
          setAuthConfigError(message)
        } else {
          console.error("Firebase auth state error:", error)
        }
        setLoading(false)
      }
    )
    return () => unsubscribe()
  }, [handleUser, isInvalidApiKey])

  const login = async (email: string, pass: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, pass)
    } catch (error: any) {
      const message = getAuthErrorMessage(error)
      if (message) {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: message,
        })
      }
    }
  }

  const signup = async (email: string, pass: string, username: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      )
      await updateProfile(userCredential.user, {
        displayName: username,
      })
    } catch (error: any) {
      const message = getAuthErrorMessage(error)
      if (message) {
        toast({
          variant: "destructive",
          title: "Sign up failed",
          description: message,
        })
      }
    }
  }

  const logout = async () => {
    await signOut(auth)
    router.push("/auth")
  }

  const updateUserScore = async (points: number) => {
    if (!user) return
    const userRef = doc(db, "users", user.uid)
    try {
      await updateDoc(userRef, {
        score: increment(points),
      })
      setUser((prev) =>
        prev ? { ...prev, score: prev.score + points } : null
      )
    } catch (error) {
      console.error("Failed to update user score:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not update your score.",
      })
    }
  }

  const updateUserAvatar = async (file: File) => {
    if (!user || !auth.currentUser) return

    try {
      const storageRef = ref(storage, `avatars/${user.uid}/${file.name}`)
      const snapshot = await uploadBytes(storageRef, file)
      const downloadURL = await getDownloadURL(snapshot.ref)

      await updateProfile(auth.currentUser, { photoURL: downloadURL })
      const userRef = doc(db, "users", user.uid)
      await updateDoc(userRef, { avatar: downloadURL })

      setUser((prevUser) =>
        prevUser ? { ...prevUser, avatar: downloadURL } : null
      )

      toast({
        title: "Success!",
        description: "Your profile photo has been updated.",
      })
    } catch (error: any) {
      console.error("Error updating avatar:", error)
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description:
          error.code === "storage/unauthorized"
            ? "Permission denied. Check your Firebase Storage security rules."
            : "There was an error updating your profile photo. Please try again.",
      })
    }
  }

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    updateUserScore,
    updateUserAvatar,
  }

  if (authConfigError) {
    return (
      <AuthContext.Provider value={value}>
        <FirebaseWarning
          isApiKeyInvalid={isInvalidApiKey()}
          authConfigError={authConfigError}
        />
      </AuthContext.Provider>
    )
  }

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}


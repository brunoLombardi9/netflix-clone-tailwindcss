import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { setDoc, doc } from "firebase/firestore";

const authContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

 async function signUp(email, password) {
    await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", email), {
      favourites: [],
    });
  }

  async function logIn(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }

  async function logOut() {
     await signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const context = {
    user,
    signUp,
    logIn,
    logOut,
  };

  return (
    <authContext.Provider value={context}>{children}</authContext.Provider>
  );
}

export function UserAuth() {
  return useContext(authContext);
}

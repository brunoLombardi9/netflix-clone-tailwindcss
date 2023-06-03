import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase.js";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const GetSavedMovies = (user) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.favourites);
    });
  }, [user?.email]);
  return movies;
};

export default GetSavedMovies;

import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../utils/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

const RowMovie = (movie, id) => {
  const userMethods = UserAuth();
  const moviedata = movie.movie;
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const email = userMethods.user?.email;
  const movieId = doc(db, "users", `${email}`);

  async function saveMovie() {

    if (email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        favourites: arrayUnion({
          id: moviedata.id,
          title: moviedata.title,
          img: moviedata.backdrop_path,
        }),
      });
    }else{
      alert("Please, use your account to save a movie.")
    }
  }

  return (
    <div className="w-[160px] sm:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        src={`https://image.tmdb.org/t/p/w500${moviedata.backdrop_path}`}
        alt={moviedata.title}
        className="w-full h-auto block"
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {moviedata.title}
        </p>
        <p onClick={saveMovie}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-grey-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-grey-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default RowMovie;

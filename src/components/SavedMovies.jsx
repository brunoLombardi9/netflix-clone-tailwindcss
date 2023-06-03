import React, { useRef } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import sliderHandler from "../utils/sliderHandler.js";
import { UserAuth } from "../context/AuthContext.jsx";
import GetSavedMovies from "../utils/GetSavedMovies.jsx";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase.js";

export const SavedMovies = () => {
  const userMethods = UserAuth();
  const savedMovies = GetSavedMovies(userMethods.user);
  const moviesRef = doc(db, "users", userMethods?.user?.email);
  const sliderRef = useRef();
  const slideLeft = () => sliderHandler.slideLeft(sliderRef);
  const slideRight = () => sliderHandler.slideRight(sliderRef);

  async function deleteMovie(id) {
    try {
      const result = savedMovies.filter((movie) => movie.id !== id);

      await updateDoc(moviesRef, {
        favourites: result,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">Your Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-3"
          size={40}
          onClick={slideLeft}
        />
        <div
          ref={sliderRef}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {savedMovies?.map((movieData, id) => (
            <div
              className="w-[160px] sm:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              key={movieData.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movieData.img}`}
                alt={movieData.title}
                className="w-full h-auto block"
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {movieData.title}
                </p>
                <p
                  onClick={() => deleteMovie(movieData.id)}
                  className="absolute text-gray-300 top-4 right-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-3"
          size={40}
          onClick={slideRight}
        />
      </div>
    </>
  );
};

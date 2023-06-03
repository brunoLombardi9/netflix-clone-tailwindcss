import React from "react";
import GetMovies from "../utils/GetMovies";
import truncateString from "../utils/truncateString.js"
import requests from "../utils/requests";

const Main = () => {
  const popularMovies = GetMovies(requests.requestPopular);
  const movie = popularMovies[Math.floor(Math.random() * popularMovies.length)];

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h2 className="text-3xl md:text-5xl font-bold">{movie?.title}</h2>
          <div className="my-4">
          <button className="border bg-gray-300 text-black py-2 px-5 mr-4">
            Play
          </button>
          <button className="border text-white py-2 px-5">Watch Later</button>
          </div>
          <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncateString(movie?.overview, 200)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;

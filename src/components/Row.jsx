import React, { useState, useRef } from "react";
import GetMovies from "../utils/GetMovies";
import RowMovie from "./RowMovie";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import sliderHandler from "../utils/sliderHandler.js";

const Row = ({ title, urlToFetch }) => {
  const movies = GetMovies(urlToFetch);
  const sliderRef = useRef();
  const slideLeft = () => sliderHandler.slideLeft(sliderRef);
  const slideRight = () => sliderHandler.slideRight(sliderRef);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
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
          {movies?.map((movie, id) => (
            <RowMovie movie={movie} id={id} key={id} />
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

export default Row;

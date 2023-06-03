import React from "react";
import { UserAuth } from "../context/AuthContext";
import { SavedMovies } from "../components/SavedMovies";

const Account = () => {
  const userMethods = UserAuth();
  const email = userMethods?.user?.email;
  return (
    <>
    <div className="w-full text-white">
      <img
        className="w-full h-[400px] object-cover"
        src="netflix-background.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
      <div className="absolute top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
      </div>
    </div>
    <SavedMovies/>
    </>
  );
};

export default Account;

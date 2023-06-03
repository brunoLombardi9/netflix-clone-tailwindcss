import React from "react";
import { Link } from "react-router-dom";

const NavButtonsNotAuthenticated = () => {
  return (
    <div>
      <Link to="/login">
        <button className="text-white pr-4">Sign In</button>
      </Link>
      <Link to="/signup">
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default NavButtonsNotAuthenticated;

import React from "react";
import { Link } from "react-router-dom";

const NavButtonsAuthenticated = ({ handleLogout }) => {
  return (
    <div>
      <Link to="/account">
        <button className="text-white pr-4">Account</button>
      </Link>
      <button
        className="bg-red-600 px-6 py-2 rounded cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default NavButtonsAuthenticated;

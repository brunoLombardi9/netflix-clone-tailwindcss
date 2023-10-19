import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import NavButtonsAuthenticated from "./NavButtonsAuthenticated";
import NavButtonsNotAuthenticated from "./NavButtonsNotAuthenticated";
import NetflixLogo from "./NetflixLogo";

const Navbar = () => {
  const userMethods = UserAuth();
  const navigate = useNavigate()

  async function handleLogout() {

    try {
      await userMethods.logOut();
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <NetflixLogo/>
      </Link>
      {userMethods?.user?.email ? (
        <NavButtonsAuthenticated handleLogout={handleLogout} />
      ) : (
        <NavButtonsNotAuthenticated />
      )}
    </div>
  );
};

export default Navbar;

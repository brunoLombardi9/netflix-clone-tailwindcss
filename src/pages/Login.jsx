import React, { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const userMethods = UserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      await userMethods?.logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      {!userMethods?.user?.email ? (
        <div className="w-full h-screen">
          <img
            className="hidden sm:block absolute w-full h-full object-cover"
            src="netflix-background.jpg"
            alt="/"
          />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
          <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
              <div className="max-w-[320px] mx-auto py-16">
                {error ? (
                  <p className="p-3 bg-red-400 rounded my-2">{error}</p>
                ) : null}
                <h1 className="text-3xl font-bold">Sign In</h1>
                <form
                  className="w-full flex flex-col py-4"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="p-3 my-2 bg-gray-700 rounded"
                    type="email"
                    autoComplete="email"
                    ref={emailRef}
                  />
                  <input
                    className="p-3 my-2 bg-gray-700 rounded"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    ref={passwordRef}
                  />
                  <button
                    className="bg-red-600 py-2 my-6 font-bold rounded"
                    type="submit"
                  >
                    Log In
                  </button>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <p>
                      <input type="checkbox" className="mr-2" />
                      Remember me
                    </p>
                    <p>Need Help?</p>
                  </div>
                  <p className="py-8">
                    <span className="text-gray-600">New to Netflix?</span>{" "}
                    <Link to="/signup">Register</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Login;

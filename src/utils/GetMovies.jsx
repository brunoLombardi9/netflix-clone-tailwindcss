import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./requests.js";

const GetMovies = (urlToFetch) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(urlToFetch)
      .then((res) => setMovies(res.data.results));
  }, []);
  return movies;
};

export default GetMovies;

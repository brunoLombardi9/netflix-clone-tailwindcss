import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../utils/requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Upcoming" urlToFetch={requests.requestUpcoming}/>
      <Row title="Popular" urlToFetch={requests.requestPopular}/>
      <Row title="Trending" urlToFetch={requests.requestTrending}/>
      <Row title="Top Rated" urlToFetch={requests.requestTopRated}/>
      <Row title="Horror" urlToFetch={requests.requestHorror}/>
    </>
  );
};

export default Home;

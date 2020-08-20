import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./BannerCSS.css";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  console.log(movies);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
        )`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movies?.title || movies?.name || movies?.original_name}
          </h1>

          <div className="banner_buttons">
            <button className="banner_button">play</button>
            <button className="banner_button">more info</button>
          </div>

          <h1 className="banner_description">
            {movies?.overview}
            {truncate(movies?.overview, 150)}
          </h1>
        </div>

        <div className="banner_fadebottom" />
      </header>
    </>
  );
}

export default Banner;

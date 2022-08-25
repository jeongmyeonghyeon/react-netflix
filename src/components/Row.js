import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

function Row({ title, id, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchUrl]);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    console.log(request.data.results);
    setMovies(request.data.results);
    return request;
  };

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow">{"<"}</span>
        </div>
        <div className="row__posters">
          {movies.map((movie) => {
            console.log(movie);
            return (
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            );
          })}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow">{">"}</span>
        </div>
      </div>
    </section>
  );
}

export default Row;

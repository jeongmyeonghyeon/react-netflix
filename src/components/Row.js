import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import MovieModal from "./MovieModal";

function Row({ title, id, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    fetchMovieData();
  }, [fetchUrl]);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    console.log(request.data.results);
    setMovies(request.data.results);
    return request;
  };

  const handleClick = (movie) => {
    console.log(movie);
    setModalOpen(true);
    setSelectedMovie(movie);
  };

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div
          className="slider__arrow-left"
          onClick={() =>
            (document.getElementById(id).scrollLeft -= window.innerWidth - 80)
          }
        >
          <span className="arrow">{"<"}</span>
        </div>
        <div className="row__posters" id={id}>
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
                onClick={() => handleClick(movie)}
              />
            );
          })}
        </div>
        <div
          className="slider__arrow-right"
          onClick={() =>
            (document.getElementById(id).scrollLeft += window.innerWidth + 80)
          }
        >
          <span className="arrow">{">"}</span>
        </div>
      </div>
      {modalOpen && (
        <MovieModal {...selectedMovie} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}

export default Row;

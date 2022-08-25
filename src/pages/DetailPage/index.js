import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";

function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      // console.log("fetchData", request.data);
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) {
    return <div>Loaidng...</div>;
  }

  return (
    <section className="movie-detail">
      <img
        className="movie-detail__img"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
      />
    </section>
  );
}

export default DetailPage;

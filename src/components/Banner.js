import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보를 가져오기 (여러 영화)
    const { data } = await axios.get(requests.fetchNowPlaying);

    // 여러 영화 중 영화 하나의 id를 가져오기
    const movieId =
      data.results[Math.floor(Math.random() * data.results.length)].id;

    // 특정 영화의 더 상세한 정보를 가져오기 (비디오 정보도 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });

    console.log("movieDetail", movieDetail);
    setMovie(movieDetail);
  };

  // console.log(movie);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <div className="banner__button play">Play</div>
          <div className="banner__button info">More Information</div>
        </div>
        <p className="banner__description">{movie.overview}</p>
      </div>
      <div className="banner--fadeBottom"></div>
    </section>
  );
}

export default Banner;

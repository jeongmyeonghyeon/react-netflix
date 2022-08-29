import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/requests";
import "./Banner.css";
import styled from "styled-components";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

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

    // console.log("movieDetail", movieDetail);
    console.log(movieDetail.videos.results[0]);
    setMovie(movieDetail);
  };

  const handleClosePreviewClick = () => {
    console.log("handleClosePreviewClick");
    setIsClicked(false);
  };

  if (movie.length === 0) {
    return <div>Loading...</div>;
  }

  if (!isClicked) {
    return (
      movie && (
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
              <div
                className="banner__button play"
                onClick={() => setIsClicked(true)}
              >
                Play
              </div>
              <div className="banner__button info">More Information</div>
            </div>
            <p className="banner__description">{movie.overview}</p>
          </div>
          <div className="banner--fadeBottom"></div>
        </section>
      )
    );
  } else {
    return (
      <Base>
        <Wrapper>
          <Iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${
              movie.videos.results[0]?.key || "LwvXVEHS638"
            }?controls=0&autoplay=1&loop=1&mute=1&playlist=${
              movie.videos.results[0]?.key || "LwvXVEHS638"
            }`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Iframe>
          <div className="button-wrapper">
            <button onClick={handleClosePreviewClick}>X</button>
          </div>
        </Wrapper>
      </Base>
    );
  }
}

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin-top: -68px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  div.button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      position: absolute;
      bottom: 24px;
      transform: translateX(-50%);
      background-color: transparent;
      border: 0;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

const Iframe = styled.iframe`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Banner;

import axios from "../../api/axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SearchPage.css";
import useDebounce from "../../hooks/useDebounce";

function SearchPage(props) {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
      console.log("fetchSearchMovie");
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      // console.log(request.data.results);
      setSearchResults(request.data.results);
    } catch (error) {
      console.error("[error]: ", error);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div className="movie__column-poster">
                  <img
                    className="movie__poster"
                    src={movieImageUrl}
                    alt={movie.title || movie.name}
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>
            입력하신 검색어"{debouncedSearchTerm}"와 일치하는 결과가 없습니다.
          </p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
}

export default SearchPage;

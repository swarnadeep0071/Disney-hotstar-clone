import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import HrMovieCard from "./HrMovieCard";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

function MovieList({
  genreId,
  genreName,
  index_,
  searchQuery,
  onMovieClick,
  onResultsUpdate,
}) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  }, [genreId]);

  const filteredMovies =
    !searchQuery || searchQuery.trim().length === 0
      ? movieList
      : movieList.filter((movie) => {
          const title = (movie.title || movie.name || "").toLowerCase();
          return title.includes(searchQuery.toLowerCase());
        });

  // Report results count to parent for global "found / not found" message
  useEffect(() => {
    if (onResultsUpdate) {
      onResultsUpdate(genreId, filteredMovies.length);
    }
  }, [filteredMovies.length, onResultsUpdate, genreId]);

  // When searching and this genre has no matches, hide the whole section
  if (searchQuery && searchQuery.trim().length > 0 && filteredMovies.length === 0) {
    return null;
  }

  const slideRight = () => {
    const element = elementRef.current;
    if (!element) return;
    element.scrollLeft += 500;
  };

  const slideLeft = () => {
    const element = elementRef.current;
    if (!element) return;
    element.scrollLeft -= 500;
  };

  return (
    <div className="px-4 py-4 md:px-16 md:py-5">
      <h2 className="text-[18px] md:text-[20px] font-bold">{genreName}</h2>

      <div className="relative">
        <IoChevronBackOutline
          onClick={slideLeft}
          className={`text-[50px] p-2 z-10 cursor-pointer hidden md:block absolute ${
            index_ % 3 === 0 ? `mt-[65px]` : `mt-[150px]`
          }`}
        />
        <div
          ref={elementRef}
          className="flex overflow-x-auto gap-8 no-scrollbar scroll-smooth pt-5 px-3 pb-5"
        >
          {filteredMovies.map((item, index) => (
            <React.Fragment key={item.id || index}>
              {index_ % 3 === 0 ? (
                <HrMovieCard
                  movie={item}
                  onClick={() => onMovieClick?.(item)}
                />
              ) : (
                <MovieCard movie={item} onClick={() => onMovieClick?.(item)} />
              )}
            </React.Fragment>
          ))}
        </div>
        <IoChevronForwardOutline
          onClick={slideRight}
          className={`text-[50px] hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${
            index_ % 3 === 0 ? `mt-[65px]` : `mt-[150px]`
          }`}
        />
      </div>
    </div>
  );
}

export default MovieList;
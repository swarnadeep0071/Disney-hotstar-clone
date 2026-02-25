import React, { useEffect, useState } from "react";
import GenresList from "../Constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList({ searchQuery, onMovieClick }) {
  const [resultsByGenre, setResultsByGenre] = useState({});

  // Reset results map whenever the search query changes
  useEffect(() => {
    setResultsByGenre({});
  }, [searchQuery]);

  const handleResultsUpdate = (genreId, count) => {
    setResultsByGenre((prev) => ({
      ...prev,
      [genreId]: count,
    }));
  };

  const hasSearch = searchQuery && searchQuery.trim().length > 0;
  const hasResults = Object.values(resultsByGenre).some((c) => c > 0);

  return (
    <div>
      {GenresList.genere.map(
        (item, index) =>
          index <= 9 && (
            <MovieList
              key={item.id}
              genreId={item.id}
              genreName={item.name}
              index_={index}
              searchQuery={searchQuery}
              onMovieClick={onMovieClick}
              onResultsUpdate={handleResultsUpdate}
            />
          )
      )}

      {hasSearch && (
        <div className="px-4 md:px-16 pb-6 text-sm md:text-base text-gray-300">
          {hasResults ? "Movies found" : "Movies not found"}
        </div>
      )}
    </div>
  );
}

export default GenreMovieList;